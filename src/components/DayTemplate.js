import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

import SearchExercise from "./SearchExercise";
import Exercise from "./Exercise";
import { DayTemplateContext } from "../contexts";

function DayTemplate() {
  const [template, setTemplate] = useState([]);
  const handleSetTemplate = exercise => {
    setTemplate([...template, exercise]);
  };

  const onDragEnd = result => {
    const {
      destination,
      source,
      draggableId
    } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    let newTemplate = [...template];
    newTemplate.splice(source.index, 1);
    newTemplate.splice(destination.index, 0, template[draggableId]);
    setTemplate(newTemplate);
  };

  console.log('rerender: ',template);
  return (
    <div>
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="1">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {template.map((exercise, i) => (
                <Exercise {...exercise} id={i} key={i} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <DayTemplateContext.Provider value={{ handleSetTemplate }}>
        <SearchExercise />
      </DayTemplateContext.Provider>
    </div>
  );
}

export default DayTemplate;
