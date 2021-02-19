import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { IUser } from '../store/modules/user/types'

const Home: React.FC = () => {
  const [ users, setUsers ] = useState<IUser[]>([])

  useEffect(() => {
    api.get('students').then(
      response => {
        setUsers(response.data)
        console.log(response)
      }
    )
  }, [])

  return (
    <div>
      <h1>Hello!!!</h1>
      {users.map(user => {
        return (
        <div key={user.id}>
          <article>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </article>
          <hr />
        </div>
      )})}
    </div>
  )
}

export default Home