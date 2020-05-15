import React, { useState, useContext } from "react";
import Modal from "react-modal";

import { DayTemplateContext } from "../contexts";

Modal.setAppElement("#root");

const initState = {
    duration: undefined,
    sets: undefined,
    reps: undefined,
    weights: undefined,
    note: ""
  }

function SearchExerciseModal({ modal, setModal, exercise, setExercise }) {
  const { handleSetExercises } = useContext(DayTemplateContext);
  const [variables, setVariables] = useState(initState);
  const [ displayNote, setDisplayNote ] = useState(false)

  const handleOnChange = e => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };

  const handleAddExercise = () => {
      let newExercise = {...exercise}
      Object.keys(variables).forEach(variable => {
          if (variables[variable]) {
              newExercise[variable] = variables[variable]
          }
      })
      setModal(false)
      handleSetExercises(newExercise)
      setVariables(initState)
  }

  const handleSetDisplayNote = () => {
    setDisplayNote(!displayNote)
    setVariables({ ...variables, note: "" });
  }
  console.log(variables.note)
  return (
    <Modal isOpen={modal}>
      <h2>{exercise.name}</h2>
      {variables.duration ? (
        <div>
          <input
            name="duration"
            type="number"
            value={variables.duration}
            onChange={handleOnChange}
          />
          <button name="duration" value={undefined} onClick={handleOnChange}>
            x
          </button>
        </div>
      ) : (
        <button name="duration" value={1} onClick={handleOnChange}>
          Set duration
        </button>
      )}
      {variables.sets ? (
        <div>
          <input
            name="sets"
            type="number"
            value={variables.duration}
            onChange={handleOnChange}
          />
          <button name="sets" value={undefined} onClick={handleOnChange}>
            x
          </button>
        </div>
      ) : (
        <button name="sets" value={1} onClick={handleOnChange}>
          Set sets
        </button>
      )}
      {variables.reps ? (
        <div>
          <input
            name="reps"
            type="number"
            value={variables.duration}
            onChange={handleOnChange}
          />
          <button name="reps" value={undefined} onClick={handleOnChange}>
            x
          </button>
        </div>
      ) : (
        <button name="reps" value={1} onClick={handleOnChange}>
          Set reps
        </button>
      )}
      {variables.weights ? (
        <div>
          <input
            name="weights"
            type="number"
            value={variables.duration}
            onChange={handleOnChange}
          />
          <button name="weights" value={undefined} onClick={handleOnChange}>
            x
          </button>
        </div>
      ) : (
        <button name="weights" value={1} onClick={handleOnChange}>
          Set weights
        </button>
      )}
      {displayNote ? (
        <div>
          <input
            name="note"
            type="text"
            value={variables.note}
            onChange={handleOnChange}
            autoFocus
          />
          <button onClick={handleSetDisplayNote}>
            x
          </button>
        </div>
      ) : (
        <button onClick={handleSetDisplayNote}>
          Write note
        </button>
      )}
      <button onClick={handleAddExercise}>Add exercise</button>
      <button onClick={() => setModal(false)}>Cancel</button>
    </Modal>
  );
}

export default SearchExerciseModal;
