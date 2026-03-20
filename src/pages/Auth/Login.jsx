import { useState } from "react";
import api from "../../api/axiosInstance";
import style from './Auth.module.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('userId', res.data.userId);

            window.location.href = "/";
        } catch (err) {
            const responseData = err.response?.data;

            if(err.response?.status === 429) {
                setError("Too many attempts. Please try again in 15 minutes.")
            }
            else if (Array.isArray(responseData?.message)) {
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
                <h2>Sign in</h2>
                
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
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}