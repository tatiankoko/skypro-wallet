import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";
import {
    AuthContainer,
    AuthErrorPlaceholder, AuthInputWrapper, AuthRequiredMark, AuthWrapper, ErrorNotification,
    ModalFormGroup
} from "./Auth.styled.js";
import {FormInput} from "../Input.styled.js";
import {FormButton} from "../Button.styled.js";
import {Modal, ModalBlock, ModalForm, ModalTtl} from "../Modal.styled.js";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const { login, signup } = useAuth();
    // состояние текста ошибки, чтобы показать её пользователю
    const [error, setError] = useState("");


    // состояние полей
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });

    // состояние ошибок
    const [errors, setErrors] = useState({
        name: false,
        login: false,
        password: false,
    });

    const validateForm = () => {
        const newErrors = { name: false, login: false, password: false };
        let isValid = true;

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!formData.login.trim()) {
            newErrors.login = true;
            setError("Заполните все поля");
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            setError("Заполните все поля");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors((previousErrors) => ({ ...previousErrors, [name]: false }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const data = isSignUp
                ? await signup({
                    name: formData.name,
                    login: formData.login,
                    password: formData.password})
                : await login({
                    login: formData.login,
                    password: formData.password});

            if (data) {
                isSignUp ? setIsSignUp(false) : navigate("/");
            }
        } catch (err) {
            setErrors({
                name: isSignUp,
                login: true,
                password: true,
            });
            setError(err.message);
        }
    };

    return (
        <AuthWrapper>
            <AuthContainer>
                <Modal>
                    <ModalBlock>
                        <ModalTtl>
                            {
                                isSignUp
                                    ? 'Регистрация'
                                    : 'Вход'
                            }
                        </ModalTtl>

                        <ModalForm onSubmit={handleSubmit}>
                            {
                                isSignUp
                                    ? <AuthInputWrapper>
                                        <FormInput $error={errors.name}
                                                   type="text"
                                                   name="name"
                                                   id="formname"
                                                   aria-label="Имя"
                                                   placeholder={errors.name ? "" : "Имя"}
                                                   value={formData.name}
                                                   onChange={handleChange}
                                        />
                                        {errors.name && !formData.name && (
                                            <AuthErrorPlaceholder>
                                                Имя<AuthRequiredMark> *</AuthRequiredMark>
                                            </AuthErrorPlaceholder>
                                        )}
                                    </AuthInputWrapper>
                                    : null
                            }
                            <AuthInputWrapper>
                                <FormInput $error={errors.login}
                                           type="text"
                                           name="login"
                                           id="formlogin"
                                           aria-label="Эл. почта"
                                           placeholder={errors.login ? "" : "Эл. почта"}
                                           value={formData.login}
                                           onChange={handleChange} />
                                {errors.login && !formData.login && (
                                    <AuthErrorPlaceholder>
                                        Эл. почта<AuthRequiredMark> *</AuthRequiredMark>
                                    </AuthErrorPlaceholder>
                                )}
                            </AuthInputWrapper>

                            <AuthInputWrapper>
                                <FormInput $error={errors.password}
                                           type="password"
                                           name="password"
                                           id="formpassword"
                                           aria-label="Пароль"
                                           placeholder={errors.password ? "" : "Пароль"}
                                           value={formData.password}
                                           onChange={handleChange}
                                />
                                {errors.password && !formData.password && (
                                    <AuthErrorPlaceholder>
                                        Пароль<AuthRequiredMark> *</AuthRequiredMark>
                                    </AuthErrorPlaceholder>
                                )}
                            </AuthInputWrapper>

                            {
                                error
                                    ? <ErrorNotification>{error}</ErrorNotification>
                                    : null
                            }

                            <FormButton disabled={Boolean(error)} type="submit">
                                { isSignUp ? 'Зарегистрироваться' : 'Войти' }
                            </FormButton>
                        </ModalForm>

                        <ModalFormGroup>
                            { isSignUp
                                ? <p>Уже есть аккаунт?</p>
                                : <p>Нужно зарегистрироваться?</p>
                            }
                            { isSignUp
                                ? <a onClick={()=> setIsSignUp(false)}>
                                    Войдите здесь
                                </a>
                                : <a onClick={()=> setIsSignUp(true)}>
                                    Регистрируйтесь здесь
                                </a>
                            }
                        </ModalFormGroup>
                    </ModalBlock>
                </Modal>
            </AuthContainer>
        </AuthWrapper>
    );
}

export default Auth;