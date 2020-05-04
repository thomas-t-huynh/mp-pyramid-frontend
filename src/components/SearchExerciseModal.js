import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function SearchExerciseModal({ modal, setModal, exercise, setExercise }) {
  const [variables, setVariables] = useState({
    duration: undefined,
    sets: undefined,
    reps: undefined,
    weights: undefined
  });

  const handleOnChange = e => {
    setVariables({ ...variables, [e.target.name]: e.target.value})
  }
  return (
    <Modal isOpen={modal}>
      <h2>{exercise.name}</h2>
      {variables.duration ? (
        <input name="duration" type="number" value={variables.duration} onChange={handleOnChange} />
      ) : (
        <button name="duration" value={1} onClick={handleOnChange}>
          Set duration
        </button>
      )}
      <button>Set sets</button>
      <button>Set reps</button>
      <button>Set weights</button>
      <button onClick={() => setModal(false)}>x</button>
    </Modal>
  );
}

export default SearchExerciseModal;
