import {useState} from "react";
import {TableContainer} from "../table/Table.styled.js";
import {FormInput} from "../Input.styled.js";
import {FormButton} from "../Button.styled.js";
import {
    CategoryGroup,
    CategoryToggle,
    DateInput,
    FieldGroup,
    FieldLabel,
    NewCostBlock,
    NewCostForm,
    NewCostTtl,
    NewCostWrapper,
    SumInput
} from "./NewCost.styled.js";
import {useTransactions} from "../../context/TransactionsContext.jsx";
import {ErrorNotification} from "../auth/Auth.styled.js";
import {CATEGORIES} from "../../constants/categories.js";

const NewCost = ({loading, onSubmit}) => {
    const {addTransaction} = useTransactions();
    const [category, setCategory] = useState('');
    const [validationErrors, setValidationErrors] = useState({
        description: false,
        category: false,
        date: false,
        sum: false,
    });
    const [submitError, setSubmitError] = useState('');
    const [formData, setFormData] = useState(() => {
        // toISOString() даёт UTC-дату и может сдвинуть день, поэтому собираем локальную
        const today = new Date();
        const date = [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, '0'),
            String(today.getDate()).padStart(2, '0'),
        ].join('-');

        return {
            description: '',
            date,
            sum: '',
        };
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setValidationErrors((previous) => ({
            ...previous,
            [name]: false,
        }));
        setSubmitError('');
    };

    // Заглушка до подключения API: пока только валидация
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            description: !formData.description.trim(),
            category: !category,
            date: !formData.date,
            sum: !formData.sum.trim(),
        };
        const hasValidationErrors = Object.values(newErrors).some(Boolean);
        setValidationErrors(newErrors);
        setSubmitError('');

        if (!hasValidationErrors) {
            const newTransaction = {
                description: formData.description,
                sum: Number(formData.sum),
                category: category,
                date: new Date(formData.date)
            }

            try {
                const result = await addTransaction(newTransaction);

                if (result) {
                    const refreshed = await onSubmit();
                    if (refreshed) {
                        setFormData({
                            description: '',
                            date: formData.date,
                            sum: '',
                        });
                        setCategory('');
                        setValidationErrors({
                            description: false,
                            category: false,
                            date: false,
                            sum: false,
                        });
                    } else {
                        setSubmitError('Расход добавлен, но список не удалось обновить.');
                    }
                } else {
                    setSubmitError('Не удалось добавить расход.');
                }
            } catch (err) {
                setSubmitError(err.message);
            }
        }
    };

    return (
        <NewCostWrapper>
            <TableContainer>
                <NewCostBlock>
                    <NewCostTtl>Новый расход</NewCostTtl>

                    <NewCostForm onSubmit={handleSubmit}>
                        <FieldGroup>
                            <FieldLabel htmlFor="cost-description" $error={validationErrors.description}>Описание</FieldLabel>
                            <FormInput
                                id="cost-description"
                                $error={validationErrors.description}
                                type="text"
                                name="description"
                                placeholder="Введите описание"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel as="span" $error={validationErrors.category}>Категория</FieldLabel>
                            <CategoryGroup>
                                {CATEGORIES.map((item) => (
                                    <CategoryToggle key={item.value} $active={category === item.value}>
                                        <input
                                            type="radio"
                                            name="category"
                                            value={item.value}
                                            checked={category === item.value}
                                            onChange={() => {
                                                setCategory(item.value);
                                                setValidationErrors((previous) => ({
                                                    ...previous,
                                                    category: false,
                                                }));
                                                setSubmitError('');
                                            }}
                                        />
                                        <svg width="14" height="14" aria-hidden="true">
                                            <use href={`/images/icon/sprite.svg#${item.icon}`}></use>
                                        </svg>
                                        {item.label}
                                    </CategoryToggle>
                                ))}
                            </CategoryGroup>
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="cost-date" $error={validationErrors.date}>Дата</FieldLabel>
                            <DateInput
                                id="cost-date"
                                $error={validationErrors.date}
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="cost-sum" $error={validationErrors.sum}>Сумма</FieldLabel>
                            <SumInput
                                id="cost-sum"
                                $error={validationErrors.sum}
                                type="number"
                                name="sum"
                                min="0"
                                placeholder="Введите сумму"
                                value={formData.sum}
                                onChange={handleChange}
                            />
                        </FieldGroup>

                        {
                            submitError
                                ? <ErrorNotification>{submitError}</ErrorNotification>
                                : null
                        }

                        <FormButton disabled={loading} type="submit">Добавить новый расход</FormButton>
                    </NewCostForm>
                </NewCostBlock>
            </TableContainer>
        </NewCostWrapper>
    );
}

export default NewCost;
