import React from 'react'
import BagItems from '../components/BagItems'
import BagSummary from '../components/BagSummary'
import { useSelector } from 'react-redux'


const Bag = () => {

  const items = useSelector((store)=>store.items)
  console.log(items)
  return (
    <div>
    <main>
      <div className="bag-page">
        <div className="bag-items-container"><BagItems item={items[0]}/></div>
        <div className="bag-summary"><BagSummary/></div>
      </div>
    </main>
    </div>
  )
}

export default Bag