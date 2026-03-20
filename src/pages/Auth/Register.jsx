import { useState } from "react";
import api from "../../api/axiosInstance";
import style from './Auth.module.css'; 

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await api.post('/auth/register', { email, password });
            window.location.href = "/login"; 
        } catch (err) {
            const responseData = err.response?.data;

            if (Array.isArray(responseData?.message)) {
                setError(responseData.message[0]); 
            } 
            else if (responseData?.message) {
                setError(responseData.message);
            } 
            else {
                setError("Something went wrong.");
            }
        }
    };

    return (
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                
                {error && <p className={style.errorBanner}>{error}</p>}

                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}