import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DisplayItems from "../components/DisplayItems"
import { Outlet } from "react-router-dom"


function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
