import { useEffect } from "react";
import { getTodosGroupByColumn } from "../features/projectsStatusSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const { todo } = useSelector((store) => store.projectsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosGroupByColumn());
  }, []);

  return (
    <div>
      {todo.map((todo) => {
        return <div key={todo.$id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default Dashboard;
