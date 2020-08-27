import * as React from "react";
import BoxNumber from "../ui/BoxNumber";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const BoxNumberContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  margin: auto;
  background-color: #ddd;
  transition: background-color 0.2s ease;
  background-color: ${(props: { isDraggingOver: boolean }) =>
    props.isDraggingOver ? "skyblue" : "white"};
`;

class BoxNumbersContainer extends React.Component<any, any> {
  render() {
    return (
      <>
        <Droppable droppableId={this.props.id}>
          {(provided, snapshot) => (
            <BoxNumberContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.nums.map((number: any, index: number) => (
                <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
              ))}
              {provided.placeholder}
            </BoxNumberContainer>
          )}
        </Droppable>
      </>
    );
  }
}

export default BoxNumbersContainer;
