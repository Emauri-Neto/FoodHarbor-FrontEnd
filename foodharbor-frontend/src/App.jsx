import React from "react"

import Header from "./components/Header"
import Global from "./styles/Global"

import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <Global />
      <Header />
      <Outlet/>
    </>
  )
}

export default App;
