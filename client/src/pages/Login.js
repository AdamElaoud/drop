import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux"
import { userActions } from "../store/userSlice";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const [ visible, setVisible ] = useState({ type: "password", icon: faEyeSlash });

    const submit = (event) => {
        event.preventDefault();

        dispatch(userActions.login(username));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", username);
        navigate("/todos", { replace: true })
    };

    const toggleVisibility = () => {
        switch (visible.type) {
            case "password":
                setVisible({ type: "text", icon: faEye });
                break;
            case "text":
                setVisible({ type: "password", icon: faEyeSlash });
                break;
            default: throw new Error("invalid input type!");
        }
    };

    return (
        <>
            <div className = "login-backdrop">
                <form className = "login-form" onSubmit = {submit}>
                    <div className = "login-title">WELCOME</div>
                    <input
                        type = "text"
                        className = "login-input"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        placeholder = "Username"
                    />

                    <div className = "login-input-wrapper">
                        <input
                            type = {visible.type}
                            className = "login-input"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            placeholder = "Password"
                        />
                        <span className = "login-input-eye">
                            <FontAwesomeIcon icon = {visible.icon} onClick = {toggleVisibility}/>
                        </span>
                    </div>

                    <button type = "submit" className = "login-button">Login</button>
                </form>
            </div>
        </>
    );
}
