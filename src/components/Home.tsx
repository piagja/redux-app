import React from 'react'
import { useSelector } from 'react-redux'

const Home: React.FC = () => {
  const store = useSelector(state => state)
  console.log(store)
  return (
    <div>
      <h1>Hello!!!</h1>
    </div>
  )
}

export default Home