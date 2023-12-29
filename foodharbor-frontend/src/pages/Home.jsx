import React from "react";
import { StyledLink } from "../styles/StyledLink";
import { useAuth } from "../context/authContext";

const Home = () => {
    let {Logout} = useAuth()
    return(
        <>
            <StyledLink to="/login">login</StyledLink>
            <p>     |     </p>
            <StyledLink onClick={Logout}>Logout</StyledLink>
        </>
    )
}

export default Home;