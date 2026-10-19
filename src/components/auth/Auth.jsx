import {useNavigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";
import {useState} from "react";
import {
    AuthContainer,
    AuthWrapper, ErrorNotification,
    Modal,
    ModalBlock,
    ModalFormGroup,
    ModalFormLogin,
    ModalTtl
} from "./Auth.styled.js";
import {FormInput} from "../Input.styled.js";
import {FormButton} from "../Button.styled.js";

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();
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
        name: "",
        login: "",
        password: "",
    });

    const validateForm = () => {
        const newErrors = { name: "", login: "", password: "" };
        let isValid = true;

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
        setErrors({ ...errors, [name]: false });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        try {
            const data = await login({
                login: formData.login,
                password: formData.password
            });

            if (data) {
                navigate("/");
            }
        } catch (err) {
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
                                    ? <h2>Регистрация</h2>
                                    : <h2>Вход</h2>
                            }
                        </ModalTtl>

                        <ModalFormLogin onSubmit={handleSubmit}>
                            {
                                isSignUp
                                    ? <FormInput error={errors.name}
                                                 type="text"
                                                 name="name"
                                                 id="formname"
                                                 placeholder="Имя"
                                                 value={formData.name}
                                                 onChange={handleChange}/>
                                    : null
                            }
                            <FormInput error={errors.login}
                                       type="text"
                                       name="login"
                                       id="formlogin"
                                       placeholder="Эл. почта"
                                       value={formData.login}
                                       onChange={handleChange}/>

                            <FormInput error={errors.password}
                                       type="password"
                                       name="password"
                                       id="formpassword"
                                       placeholder="Пароль"
                                       value={formData.password}
                                       onChange={handleChange}/>

                            {
                                error
                                    ? <ErrorNotification>{error}</ErrorNotification>
                                    : null
                            }

                            <FormButton>
                                { isSignUp ? 'Зарегистрироваться' : 'Войти' }
                            </FormButton>
                        </ModalFormLogin>

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