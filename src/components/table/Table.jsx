import {useState} from "react";
import {
    DeleteButton,
    StyledTable, TableBlock,
    TableCell,
    TableContainer,
    TableHeadCell, TableTtl,
    TableWrapper
} from "./Table.styled.js";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {ErrorMessage} from "../Notification.styled.js";

const Table = ({loading}) => {
    const {transactions, removeTransaction} = useTransactions();
    const [error, setError] = useState('');

    const handleDelete = async (id) => {
        try {
            await removeTransaction(id);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <TableWrapper>
            <TableContainer>
                <TableBlock>
                    <TableTtl>Таблица расходов</TableTtl>

                    <StyledTable>
                        <thead>
                        <tr>
                            <TableHeadCell>Описание</TableHeadCell>
                            <TableHeadCell>Категория</TableHeadCell>
                            <TableHeadCell>Дата</TableHeadCell>
                            <TableHeadCell>Сумма</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            loading
                                ? null
                                : transactions?.map((row) => (
                                    <tr key={row._id}>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{
                                            new Date(row.date).toLocaleString(
                                                'default',
                                                {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric'
                                                })
                                        }
                                        </TableCell>
                                        <TableCell>{row.sum}</TableCell>
                                        <TableCell>
                                            <DeleteButton
                                                type="button"
                                                aria-label="Удалить строку"
                                                onClick={() => handleDelete(row._id)}
                                            >
                                                <svg width="14" height="14" aria-hidden="true">
                                                    <use href="/images/icon/sprite.svg#icon-bag"></use>
                                                </svg>
                                            </DeleteButton>
                                        </TableCell>
                                    </tr>))
                        }
                        </tbody>
                    </StyledTable>

                    {
                        error
                            ? <ErrorMessage>{error}</ErrorMessage>
                            : null
                    }
                </TableBlock>
            </TableContainer>
        </TableWrapper>
    );
}

export default Table;
