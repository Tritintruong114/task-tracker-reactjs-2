import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getTodosGroupByColumn } from "../features/projectsStatusSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const { todos, todo, inprogress, done } = useSelector(
    (store) => store.projectsStatus
  );
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch Data board
    dispatch(getTodosGroupByColumn());
  }, []);
  return (
    <DragDropContext>
      <Droppable droppableId="todo">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="col-span-1 w-full h-1/2 space-y-3 bg-lightXimen"
          >
            {todo?.map((status, index) => (
              <Draggable
                draggableId={status.$id}
                key={status.$id}
                index={index}
              >
                {(provided) => (
                  <li
                    className="py-3 bg-ximen text-white"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    key={status.$id}
                  >
                    {status.title}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dashboard;
