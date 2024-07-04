import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DisplayItems from "./components/DisplayItems"

function App() {

  const item = {

  }

  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <DisplayItems item={item}/>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
