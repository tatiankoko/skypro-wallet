import {useState} from "react";
import {
    DeleteButton,
    StyledTable, TableBlock,
    TableCell,
    TableContainer,
    TableHeadCell, TableTtl,
    TableWrapper
} from "./Table.styled.js";

// Временные данные до подключения API
const initialRows = [
    {id: 1, description: 'Продукты в супермаркете', category: 'Еда', date: '20.11.2026', sum: '2 500 ₽'},
    {id: 2, description: 'Проездной', category: 'Транспорт', date: '21.11.2026', sum: '1 200 ₽'},
    {id: 3, description: 'Квартплата', category: 'Жильё', date: '22.11.2026', sum: '8 000 ₽'},
];

const Table = () => {
    const [rows, setRows] = useState(initialRows);

    const handleDelete = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
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
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.sum}</TableCell>
                                <TableCell>
                                    <DeleteButton
                                        type="button"
                                        aria-label="Удалить строку"
                                        onClick={() => handleDelete(row.id)}
                                    >
                                        <svg width="14" height="14" aria-hidden="true">
                                            <use href="/images/icon/sprite.svg#icon-bag"></use>
                                        </svg>
                                    </DeleteButton>
                                </TableCell>
                            </tr>
                        ))}
                        </tbody>
                    </StyledTable>
                </TableBlock>
            </TableContainer>
        </TableWrapper>
    );
}

export default Table;
