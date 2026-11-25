import {createContext, useContext, useState} from 'react';
import {deleteTransaction, editTransaction, postTransaction} from "../services/transactions.js";
import {useAuth} from "./AuthContext.jsx";

const TransactionsContext = createContext(undefined);

export function TransactionsProvider({ children }) {
    const {user} = useAuth();
    const [transactions, setTransactions] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(null);

    // Функция добавления новой транзакции
    const addTransaction = async (newTransaction) => {
        const data = await postTransaction({
            token: user?.token,
            transaction: JSON.stringify(newTransaction)
        });

        if (data) {
            setTransactions(data.transactions);
            return true;
        } else {
            return false;
        }
    };

    // Функция редактирования транзакции
    const updateTransaction = async (updatedTransaction) => {
        const data = await editTransaction({
            token: user?.token,
            id: updatedTransaction._id,
            transaction: JSON.stringify(updatedTransaction)
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
            selectedPeriod,
            setSelectedPeriod,
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