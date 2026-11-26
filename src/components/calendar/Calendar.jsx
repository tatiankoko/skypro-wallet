import {useEffect, useRef, useState} from "react";
import {DayPicker} from "react-day-picker";
import {ru} from "react-day-picker/locale";
import {useAuth} from "../../context/AuthContext.jsx";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {getTransactionsByPeriod} from "../../services/transactions.js";
import {ErrorMessage} from "../Notification.styled.js";
import {
    CalendarBlock,
    CalendarContainer,
    CalendarScroll,
    CalendarTtl,
    CalendarWeekdays,
    CalendarWrapper
} from "./Calendar.styled.js";

const MONTHS_COUNT = 24;
const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const Calendar = () => {
    const [range, setRange] = useState();
    const [error, setError] = useState("");
    const scrollRef = useRef(null);
    const {user} = useAuth();
    const {setTransactions, setSelectedPeriod} = useTransactions();

    const today = new Date();
    const startMonth = new Date(today.getFullYear(), today.getMonth() - (MONTHS_COUNT - 1), 1);

    useEffect(() => {
        // Текущий месяц — последний в списке, открываем календарь на нём
        const el = scrollRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, []);

    const handleSelect = async (selectedRange) => {
        setRange(selectedRange);

        if (!selectedRange?.from || !selectedRange?.to) {
            return;
        }

        const formatDate = (date) =>
            `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;

        try {
            setError("");
            const data = await getTransactionsByPeriod({
                token: user?.token,
                period: {
                    start: formatDate(selectedRange.from),
                    end: formatDate(selectedRange.to),
                },
            });

            const transactions = Array.isArray(data) ? data : data?.transactions;

            setTransactions(transactions);
            setSelectedPeriod(selectedRange);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <CalendarWrapper>
            <CalendarContainer>
                <CalendarBlock>
                    <CalendarTtl>Период</CalendarTtl>

                    <CalendarWeekdays>
                        {WEEKDAYS.map((day) => (
                            <span key={day}>{day}</span>
                        ))}
                    </CalendarWeekdays>

                    <CalendarScroll ref={scrollRef}>
                        <DayPicker
                            mode="range"
                            locale={ru}
                            weekStartsOn={1}
                            numberOfMonths={MONTHS_COUNT}
                            defaultMonth={startMonth}
                            hideNavigation
                            selected={range}
                            onSelect={handleSelect}
                        />
                    </CalendarScroll>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </CalendarBlock>
            </CalendarContainer>
        </CalendarWrapper>
    );
}

export default Calendar;
