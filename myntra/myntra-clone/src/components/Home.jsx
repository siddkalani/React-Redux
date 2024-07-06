import React from 'react'
import DisplayItems from './DisplayItems'
import { useSelector } from 'react-redux'

const Home = () => {
  const items = useSelector((store) => store.items)
  console.log(items)
  return (
    <div>
      <main>
        <div className="items-container">
          {items.map((items , index) => (
            <DisplayItems key={index} item={items} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home