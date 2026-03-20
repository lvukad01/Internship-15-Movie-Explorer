import { useState } from "react";
import api from "../../api/axiosInstance";
import style from './Auth.module.css'

export default function Login(){
    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const res=await api.post('/auth/login', {email,password});
            localStorage.setItem('token',res.data.access_token)


            alert("Successful login")
            window.location.href = "/";
        }catch(err){
            alert("Error "+ err);
        }
    };

    return(
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit}>
                <h2>Prijava</h2>
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
                <button type="submit">Prijavi se</button>
            </form>
        </div>
    )
}