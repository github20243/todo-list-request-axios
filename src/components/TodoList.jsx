import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerComponent from "./Spinner";
import { deleteRequest } from "../store/request/Request";

const TodoList = () => {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handlerRemove = (id) => {
    dispatch(deleteRequest(id));
  };

  return (
    <>
      {todos?.map((item) => (
        <StyledListItem key={item.id}>
          <p>{item.text}</p>
          <img src={item.url} alt="" />
          <Button
            variant="outlined"
            color="error"
            onClick={() => handlerRemove(item.id)}
          >
            Delete
          </Button>
        </StyledListItem>
      ))}
      {isLoading && <SpinnerComponent />},
    </>
  );
};

export default TodoList;

const StyledListItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  background-color: bisque;
  margin: 0 auto;
  padding: 30px;
  transition: all 0.3s;
  &:hover {
    background-color: whitesmoke;
  }
`;
