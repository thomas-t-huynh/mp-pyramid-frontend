import React, { useState } from "react";
import SearchExercise from "./SearchExercise";
import Exercise from "./Exercise";

import { Droppable, DragDropContext } from "react-beautiful-dnd";

function DayTemplate() {
  const [template, setTemplate] = useState([]);
    const handleSetTemplate = (exercise) => {
        setTemplate([...template, exercise ])
    }
    console.log(template)
  return (
    <div>
        <DragDropContext

        >
      <Droppable droppableId="1">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
            {/* {template.map} */}
        </div>
      )}
      </Droppable>
      </DragDropContext>
      <SearchExercise handleSetTemplate={handleSetTemplate} />
    </div>
  );
}

export default DayTemplate;
