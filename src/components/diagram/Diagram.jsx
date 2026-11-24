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

// Временные данные до подключения API
const CHART_DATA = [
    {value: 'food', label: 'Еда', sum: 12500},
    {value: 'transport', label: 'Транспорт', sum: 3400},
    {value: 'housing', label: 'Жильё', sum: 8000},
    {value: 'joy', label: 'Развлечения', sum: 2500},
    {value: 'education', label: 'Образование', sum: 4000},
    {value: 'other', label: 'Другое', sum: 1500},
];

const Diagram = () => {
    const total = CHART_DATA.reduce((acc, item) => acc + item.sum, 0);
    const maxSum = Math.max(...CHART_DATA.map((item) => item.sum));

    // Период пока текущий месяц; позже — выбор из Calendar
    const today = new Date();
    const period = `${today.toLocaleString('ru-RU', {month: 'long'})} ${today.getFullYear()}`;

    return (
        <DiagramWrapper>
            <DiagramContainer>
                <DiagramBlock>
                    <DiagramHeader>
                        <DiagramTtl>{total.toLocaleString('ru-RU')} ₽</DiagramTtl>
                        <DiagramPeriod>Расходы за <span>{period}</span></DiagramPeriod>
                    </DiagramHeader>

                    <DiagramChart>
                        {CHART_DATA.map((item) => (
                            <ChartColumn key={item.value}>
                                <ChartBarArea>
                                    <ChartBarZone>
                                        <ChartSum $percent={(item.sum / maxSum) * 100}>
                                            {item.sum.toLocaleString('ru-RU')} ₽
                                        </ChartSum>
                                        <ChartBar
                                            $color={colors[item.value]}
                                            $percent={(item.sum / maxSum) * 100}
                                        />
                                    </ChartBarZone>
                                </ChartBarArea>
                                <ChartLabel>{item.label}</ChartLabel>
                            </ChartColumn>
                        ))}
                    </DiagramChart>
                </DiagramBlock>
            </DiagramContainer>
        </DiagramWrapper>
    );
}

export default Diagram;
