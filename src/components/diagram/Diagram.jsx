import {colors} from "../../theme.js";
import {
    ChartBar,
    ChartBarArea,
    ChartBarZone,
    ChartColumn,
    ChartLabel,
    ChartSum,
    DiagramBlock,
    DiagramChart,
    DiagramContainer,
    DiagramHeader,
    DiagramPeriod,
    DiagramTtl,
    DiagramWrapper
} from "./Diagram.styled.js";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {CATEGORIES} from "../../constants/categories.js";

const Diagram = () => {
    const {transactions, selectedPeriod} = useTransactions();

    const transactionList = Array.isArray(transactions) ? transactions : [];
    const chartData = CATEGORIES.map((category) => ({
        ...category,
        sum: transactionList.reduce((total, transaction) => {
            if (transaction.category !== category.value) {
                return total;
            }

            const sum = Number(transaction.sum);
            return total + (Number.isFinite(sum) ? sum : 0);
        }, 0),
    }));

    const total = chartData.reduce((acc, item) => acc + item.sum, 0);
    const maxSum = Math.max(...chartData.map((item) => item.sum));

    const formatDate = (date) =>
        date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    const sameDate = selectedPeriod?.from && selectedPeriod?.to
        && selectedPeriod.from.toDateString() === selectedPeriod.to.toDateString();
    const period = selectedPeriod?.from && selectedPeriod?.to
        ? sameDate
            ? formatDate(selectedPeriod.from)
            : `${formatDate(selectedPeriod.from)} — ${formatDate(selectedPeriod.to)}`
        : 'Выберите период';

    return (
        <DiagramWrapper>
            <DiagramContainer>
                <DiagramBlock>
                    <DiagramHeader>
                        <DiagramTtl>{total.toLocaleString('ru-RU')} ₽</DiagramTtl>
                        <DiagramPeriod>Расходы за <span>{period}</span></DiagramPeriod>
                    </DiagramHeader>

                    <DiagramChart>
                        {chartData.map((item) => {
                            const percent = maxSum > 0 ? (item.sum / maxSum) * 100 : 0;

                            return (
                            <ChartColumn key={item.value}>
                                <ChartBarArea>
                                    <ChartBarZone>
                                        <ChartSum $percent={percent}>
                                            {item.sum.toLocaleString('ru-RU')} ₽
                                        </ChartSum>
                                        <ChartBar
                                            $color={colors[item.value]}
                                            $percent={percent}
                                        />
                                    </ChartBarZone>
                                </ChartBarArea>
                                <ChartLabel>{item.label}</ChartLabel>
                            </ChartColumn>
                            );
                        })}
                    </DiagramChart>
                </DiagramBlock>
            </DiagramContainer>
        </DiagramWrapper>
    );
}

export default Diagram;
