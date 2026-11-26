import {CostsBlock, CostsTitle, MyCostsContainer, MyCostsWrapper} from "./MyCosts.styled.js";
import Table from "../table/Table.jsx";
import NewCost from "../newCost/NewCost.jsx";
import {useAuth} from "../../context/AuthContext.jsx";
import {useCallback, useEffect, useState} from "react";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {fetchTransactions} from "../../services/transactions.js";
import {ErrorMessage} from "../Notification.styled.js";

const MyCosts = () => {
    const [loading, setLoading] = useState(true)
    const {setTransactions} = useTransactions();
    const {user} = useAuth();
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({
        sortBy: null,
        filterBy: [],
    });

    const getTransactions = useCallback(async () => {
        try {
            const data = await fetchTransactions({
                token: user.token,
                filters: filters,
            });

            if (data) {
                setTransactions(data);
                return true;
            }

            return false;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setLoading(false);
        }
    }, [filters, setTransactions, user]);

    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

    const handleUpdate = useCallback(async () => {
        setLoading(true);
        return getTransactions();
    }, [getTransactions]);

    const handleSort = (sortBy) => {
        setLoading(true);
        setFilters((previous) => ({
            ...previous,
            sortBy,
        }));
    };

    return (
        <MyCostsWrapper>
            <MyCostsContainer>
                <CostsTitle>Мои расходы</CostsTitle>
                {
                    error
                        ? <ErrorMessage>{error}</ErrorMessage>
                        : null
                }
                <CostsBlock>
                    <Table
                        loading={loading}
                        sortBy={filters.sortBy}
                        onSort={handleSort}
                    />
                    <NewCost loading={loading} onSubmit={handleUpdate} />
                </CostsBlock>
            </MyCostsContainer>
        </MyCostsWrapper>
    );
}

export default MyCosts;