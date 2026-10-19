import {CostsBlock, CostsTitle, MyCostsContainer, MyCostsWrapper} from "./MyCosts.styled.js";
import Table from "../table/Table.jsx";
import NewCost from "../newCost/NewCost.jsx";

const MyCosts = () => {
    return (
        <MyCostsWrapper>
            <MyCostsContainer>
                <CostsTitle>Мои расходы</CostsTitle>
                <CostsBlock>
                    <Table>

                    </Table>

                    <NewCost>
                        
                    </NewCost>
                </CostsBlock>
            </MyCostsContainer>
        </MyCostsWrapper>
    );
}

export default MyCosts;