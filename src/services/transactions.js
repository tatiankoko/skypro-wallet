import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/transactions'

export async function fetchAllTransactions({ token }) {
    try {
        const data = await axios.get(API_URL,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })

        return data.data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const fetchTransactions = async ({ token, filters = {} }) => {
    try {
        const params = new URLSearchParams();

        // Добавляем параметр сортировки
        if (filters.sortBy) {
            params.append('sortBy', filters.sortBy);
        }

        // Добавляем параметр фильтрации по категориям
        if (filters.filterBy && filters.filterBy.length > 0) {
            params.append('filterBy', filters.filterBy.join(','));
        }

        const url = `${API_URL}/${params.toString() ? `?${params.toString()}` : ''}`;

        const response = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export async function postTransaction({ token, transaction }) {
    try {
        const data = await axios.post(API_URL, transaction, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function editTransaction({ token, id, transaction }) {
    try {
        const data = await axios.patch(
            `${API_URL}/${id}`,
            transaction,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'text/html',
                },
            })
        return data.data
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function deleteTransaction({ token, id }) {
    try {
        const data = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'text/html',
            },
        })
        return data.data.transactions;
    } catch (error) {
        throw new Error(error.message)
    }
}

export async function getTransactionsByPeriod({ token, period }) {
    try {
        const response = await axios.post(`${API_URL}/period`, period, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "text/html",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.message)
    }
}
