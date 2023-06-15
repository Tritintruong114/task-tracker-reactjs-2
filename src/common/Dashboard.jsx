import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { getTodosGroupByColumn } from "../features/projectsStatusSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const { todos } = useSelector((store) => store.projectsStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch Data board
    dispatch(getTodosGroupByColumn());
  }, []);
  return (
    <>
      {/* <DragDropContext className="col-span-3 grid grid-cols-3 bg-skyBlue">
        <Droppable droppableId="board" direction="horizontal" type="column">
        </Droppable>
      </DragDropContext> */}
      {todos?.map((status) => {
        return <div key={status.$id}>ABC</div>;
      })}
    </>
  );
};

export default Dashboard;
