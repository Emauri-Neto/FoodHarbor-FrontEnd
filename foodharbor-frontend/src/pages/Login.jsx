import React, {useContext} from "react";
import AuthContext from "../context/authContext";

const Login = () => {
    let {login} = useContext(AuthContext)
    return(
        <>
            <form onSubmit={login}>
                <input type="email" name="email" placeholder="teste@email.com"/>
                <input type="password" name="password" placeholder="senha"/>
                <input type="submit" />
            </form>
        </>
    )
}

export default Login;