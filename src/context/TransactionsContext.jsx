import {createContext, useContext, useState} from 'react';
import {deleteTransaction, editTransaction, postTransaction} from "../services/transactions.js";
import {useAuth} from "./AuthContext.jsx";

const TransactionsContext = createContext(undefined);

export function TransactionsProvider({ children }) {
    const {user} = useAuth();
    const [transactions, setTransactions] = useState(null);

    // Функция добавления новой транзакции
    const addTransaction = async (newTask) => {
        const data = await postTransaction({
            token: user?.token,
            task: JSON.stringify(newTask)
        });

        if (data) {
            setTransactions(data);
            return true;
        } else {
            return false;
        }
    };

    // Функция редактирования транзакции
    const updateTransaction = async (updatedTask) => {
        const data = await editTransaction({
            token: user?.token,
            id: updatedTask._id,
            task: JSON.stringify(updatedTask)
        })

        if (data) {
            setTransactions(data);
            return true;
        } else {
            return false;
        }
    };

    // Функция удаления транзакции
    const removeTransaction = async (id) => {
        const data = await deleteTransaction({
            token: user.token,
            id: id
        });

        if (data) {
            setTransactions(data);
            return true;
        } else {
            return false;
        }
    };

    return (
        <TransactionsContext.Provider value={{
            transactions,
            setTransactions,
            addTransaction,
            updateTransaction,
            removeTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);
    if (!context) {
        throw new Error('useTransactions должен использоваться внутри TransactionsProvider');
    }
    return context;
}

export default TransactionsContext;