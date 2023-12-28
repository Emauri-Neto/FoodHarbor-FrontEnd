import React, {useState} from "react";
import { useAuth } from "../context/authContext";

const Login = () => {
    let {Login} = useAuth()
    return(
        <>
            <form onSubmit={Login}>
                <input type="email" name="email" placeholder="teste@email.com"/>
                <input type="password" name="password" placeholder="senha"/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Login;