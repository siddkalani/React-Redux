import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DisplayItems from "../components/DisplayItems"
import { Outlet } from "react-router-dom"
import FetchItems from "../components/FetchItems"
import LoadingSpinner from "../components/LoadingSpinner"
import FetchStatusSlice from "../store/FetchStatusSlice"
import { useSelector } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
const fetchStatus = useSelector((store)=>store.fetchStatus)

  return (
    <>
      <Header />
      {fetchStatus.currentlyFetching?<LoadingSpinner/>:<Outlet />}
      <FetchItems/>
      <Footer />
    </>
  )
}

export default App
