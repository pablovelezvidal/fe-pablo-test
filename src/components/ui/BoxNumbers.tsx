import * as React from "react";
import BoxNumber from "./BoxNumber";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const BoxNumberDiv = styled.div`
  display: inline-block;
  justify-content: space-around;
  flex-wrap: wrap;
  width: auto;
  margin: auto;
  background-color: #ddd;
  transition: background-color 0.2s ease;
  background-color: ${(props: { isDraggingOver: boolean }) =>
    props.isDraggingOver ? "skyblue" : "white"};
`;

class BoxNumbers extends React.Component<any, any> {
  render() {
    return (
      <>
        <Droppable droppableId={this.props.id}>
          {(provided, snapshot) => (
            <BoxNumberDiv
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.nums.map((number: any, index: number) => (
                <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
              ))}
              {provided.placeholder}
            </BoxNumberDiv>
          )}
        </Droppable>
      </>
    );
  }
}

export default BoxNumbers;
