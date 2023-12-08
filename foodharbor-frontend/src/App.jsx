import React from "react"

import Header from "./components/Header"
import Global from "./styles/Global"

import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

function App() {

  return (
    <>
      <AuthProvider>
        <Global />
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  )
}

export default App;
