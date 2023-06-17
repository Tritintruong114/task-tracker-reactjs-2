import { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { getTodosGroupByColumn } from "../features/projectsStatusSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const { todos, todo, inprogress, done } = useSelector(
    (store) => store.projectsStatus
  );
  const [listTodo, setListTodo] = useState(todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosGroupByColumn());
  }, []);

  const handleOnDragEnd = (result) => {
    const items = Array.from(listTodo); //Create a new array store odd array
    const [reoderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reoderedItem);
    console.log(items);
    setListTodo(items);
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="col-span-1 w-full h-1/2 space-y-3 bg-lightXimen"
          >
            {listTodo?.map((status, index) => (
              <Draggable
                draggableId={status.$id}
                key={status.$id}
                index={index}
              >
                {(provided) => (
                  <>
                    <li
                      className="py-3 bg-ximen text-white"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      key={status.$id}
                    >
                      {status.title}
                    </li>
                  </>
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
