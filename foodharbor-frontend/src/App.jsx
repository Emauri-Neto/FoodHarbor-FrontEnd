import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Global from "./styles/Global";

import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Global />
        <Header />
        <Navbar />
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
