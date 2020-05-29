import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";

import SearchExercise from "./SearchExercise";
import Exercise from "./Exercise";
import { DayTemplateContext } from "../contexts";

const initDayTemplate = {
  name: "",
  day: "",
  time: "",
  exercises: {},
  exercisesOrder: []
}

const dummyData = {
  name: "ARC",
  day: "sun",
  time: "10:00",
  exercises: {},
  exercisesOrder: []
}

function DayTemplate({ selectedWorkout }) {
  const [ dayTemplate, setDayTemplate ] = useState(selectedWorkout ? selectedWorkout : dummyData);
  const [ error, setError ] = useState()
  const [ edit, setEdit ] = useState(false)
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


  const handleSetEdit = template => {
    setDayTemplate(template)
    setEdit(true)
  }

  return (
    <div>
      {error && <h2>{error}</h2>}
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
      <select name="day" onChange={handleOnChange} value={dayTemplate.day}>
        <option value=""/>
        <option value="sun">Sunday</option>
        <option value="mon">Monday</option>
        <option value="tue">Tuesday</option>
        <option value="wed">Wednesday</option>
        <option value="thu">Thursday</option>
        <option value="fri">Friday</option>
        <option value="sat">Saturday</option>
      </select>
      <input type="time" name="time" onChange={handleOnChange} value={dayTemplate.time}/>
      <input type="text" name="name" onChange={handleOnChange} value={dayTemplate.name} />
      <button>Set day's exercise</button>
      <DayTemplateContext.Provider value={{ handleSetExercises, handleSetEdit }}>
        <SearchExercise />
      </DayTemplateContext.Provider>
    </div>
  );
}

export default DayTemplate;
