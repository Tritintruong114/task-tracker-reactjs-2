import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTestGroupByColumn } from "../features/projectsStatusSlice";

const Dashboard = () => {
  const { todo } = useSelector((store) => store.projectsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTestGroupByColumn());
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
