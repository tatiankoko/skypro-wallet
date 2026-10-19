import {Modal, ModalBlock, ModalTtl} from "../Modal.styled.js";
import {TableContainer, TableWrapper} from "./Table.styled.js";

const Table = () => {
    return (
        <TableWrapper>
            <TableContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>Таблица расходов</ModalTtl>
                    </ModalBlock>
                </Modal>
            </TableContainer>
        </TableWrapper>
    );
}

export default Table;