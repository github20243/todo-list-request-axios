import React, { useEffect } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useDispatch } from 'react-redux'
import { getRequest } from '../store/request/Request'

const Wrapper = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getRequest())
  },[])
  return (
    <div>
      <TodoForm/>
      <TodoList/>
    </div>
  )
}

export default Wrapper
