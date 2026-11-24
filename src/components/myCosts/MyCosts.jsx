import {CostsBlock, CostsTitle, MyCostsContainer, MyCostsWrapper} from "./MyCosts.styled.js";
import Table from "../table/Table.jsx";
import NewCost from "../newCost/NewCost.jsx";
import {useAuth} from "../../context/AuthContext.jsx";
import {useCallback, useEffect, useState} from "react";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {fetchTransactions} from "../../services/transactions.js";

const MyCosts = () => {
    const [loading, setLoading] = useState(true)
    const {setTransactions} = useTransactions();
    const {user} = useAuth();
    const [error, setError] = useState('');

    const getTransactions = useCallback(async () => {
        try {
            setLoading(true);

            const data = await fetchTransactions({
                token: user.token,
            });

            if (data) {
                setTransactions(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

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