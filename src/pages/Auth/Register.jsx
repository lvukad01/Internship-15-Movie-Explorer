import { useState } from "react";
import api from "../../api/axiosInstance";
import style from './Auth.module.css'; 

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', { email, password });
            
            alert("Successful registration.");
            window.location.href = "/auth/login"; 
        } catch (err) {
            alert("Registration failed: " + (err.response?.data?.message || "Try again"));
        }
    };

    return (
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Lozinka" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}