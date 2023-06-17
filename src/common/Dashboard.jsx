import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getTodosGroupByColumn } from "../features/projectsStatusSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const { todo } = useSelector((store) => store.projectsStatus);
  const dispatch = useDispatch();

  const [listTodo, setListTodo] = useState(todo);

  useEffect(() => {
    dispatch(getTodosGroupByColumn());
  }, []);

  return (
    <div>
      {todo.map((todo) => {
        return <div>{todo.title}</div>;
      })}
    </div>
  );
};

export default Dashboard;
