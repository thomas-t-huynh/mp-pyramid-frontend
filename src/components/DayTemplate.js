import React, { useState } from "react";
import { Droppable, DragDropContext } from "react-beautiful-dnd";
import moment from "moment";

import SearchExercise from "./SearchExercise";
import Exercise from "./Exercise";
import { DayTemplateContext } from "../contexts";

const initDayTemplate = {
  name: "",
  day: "",
  date: moment().format('L'),
  exercises: {},
  exercisesOrder: []
}

const dummyData = {
  name: "ARC",
  day: "sun",
  date: "5/31/2020",
  exercises: {},
  exercisesOrder: []
}

function DayTemplate({ selectedWorkout, template, setTemplate, history }) {
  const [ dayTemplate, setDayTemplate ] = useState(selectedWorkout ? selectedWorkout : initDayTemplate);
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

  const handleSetTemplate = () => {
    let newTemplate = template
    newTemplate[dayTemplate.index] = dayTemplate
    delete newTemplate[dayTemplate.index].index
    setTemplate(newTemplate)
    history.goBack() 
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
      <label>Day name</label>
      <input type="text" name="name" onChange={handleOnChange} value={dayTemplate.name} />
      <button onClick={() => handleSetTemplate()}>Set day's exercise</button>
      <DayTemplateContext.Provider value={{ handleSetExercises, handleSetEdit }}>
        <SearchExercise />
      </DayTemplateContext.Provider>
    </div>
  );
}

export default DayTemplate;
