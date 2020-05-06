import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  background: lightgray;
  height: 50px;
  width: 200px;
`;

function Exercise(props) {
  const { id } = props;
  return (
    <Draggable draggableId={`${id}`} index={id}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          <h3>{props.children}</h3>
        </Container>
      )}
    </Draggable>
  );
}

export default Exercise;
