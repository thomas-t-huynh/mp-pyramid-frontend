import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

import SearchExercise from "./SearchExercise";
import Exercise from "./Exercise";
import { DayTemplateContext } from "../contexts";

const initDayTemplate = {
  day: "",
  time: "",
  exercises: {},
  exercisesOrder: []
}

function DayTemplate({ setWeekTemplate }) {
  const [ dayTemplate, setDayTemplate ] = useState(initDayTemplate);
  const handleSetExercises = exercise => {
    setDayTemplate({...dayTemplate, exercises: {...dayTemplate.exercises, [exercise.name]: exercise }, exercisesOrder: [...dayTemplate.exercisesOrder, exercise.name] });
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
    const { exercisesOrder } = dayTemplate;
    let newExercises = [...exercisesOrder];
    newExercises.splice(source.index, 1);
    newExercises.splice(destination.index, 0, exercisesOrder[draggableId]);
    setDayTemplate({...dayTemplate, exercisesOrder: newExercises });
  };

  const handleOnChange = e => {
    setDayTemplate({...dayTemplate, [e.target.name]: e.target.value })
  }

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
              {dayTemplate.exercisesOrder.map((exercise, i) => (
                <Exercise id={i} key={i}>{exercise}</Exercise>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <select name="day" onChange={handleOnChange}>
        <option value=""/>
        <option value="sun">Sunday</option>
        <option value="mon">Monday</option>
        <option value="tue">Tuesday</option>
        <option value="wed">Wednesday</option>
        <option value="thu">Thursday</option>
        <option value="fri">Friday</option>
        <option value="sat">Saturday</option>
      </select>
      <input type="time" onChange={handleOnChange} />
      <button>Set day's exercise</button>
      <DayTemplateContext.Provider value={{ handleSetExercises }}>
        
        <SearchExercise />
      </DayTemplateContext.Provider>
    </div>
  );
}

export default DayTemplate;
