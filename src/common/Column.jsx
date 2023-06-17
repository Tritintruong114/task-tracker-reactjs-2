import React from "react";

const Column = ({ $id, todos, index }) => {
  return (
    <>
      {todos?.map((todo, index) => (
        <Draggable draggableId={todo.$id} key={todo.$id} index={index}>
          {(provided) => (
            <div
              className="py-3 bg-ximen text-white"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              key={todo.$id}
            >
              ABC
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Column;
