import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewUser } from '../store/modules/user/actions'
import { IUser } from '../store/modules/user/types'
import api from '../services/api'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const [ users, setUsers ] = useState<IUser[]>([])

  useEffect(() => {
    api.get('students').then(
      response => {
        setUsers(response.data)
      }
    )
  }, [])

  const handleAddUsers = useCallback((user: IUser ) => {
    dispatch(addNewUser(user))
  }, [dispatch])

  return (
    <div>
      <h1>Hello!!!</h1>
      {users.map(user => {
        return (
        <div key={user.id}>
          <article>
            <p>{user.name} {user.email} {user.age}</p>
            <button onClick={() => handleAddUsers(user)}>Adicionar</button>
          </article>
          <hr />
        </div>
      )})}
    </div>
  )
}

export default Home