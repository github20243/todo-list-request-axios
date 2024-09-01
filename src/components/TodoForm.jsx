import { Button, styled, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postRequest } from '../store/request/Request';

const TodoForm = () => {
    const [text,setText] = useState("")
    const [url,setUrl] = useState("")

    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            text,
            url,
        }
        dispatch(postRequest(newTask))
        setText("")
        setUrl("")
    }

  return (
    <FormContainer onSubmit={handlerSubmit}>
      <TextField variant='outlined' label="New Text" onChange={(e) => setText(e.target.value)}/>
      <TextField variant='outlined' label="New Url" type='url'  onChange={(e) => setUrl(e.target.value)}/>
      <Button variant='contained' color='success' type='submit'>Add Task</Button>
    </FormContainer>
  )
}

export default TodoForm


const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  height: 250px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 20px;
`;


const StyledButton = styled(Button)`
  padding: 8px 70px;
`;