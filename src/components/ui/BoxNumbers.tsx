import * as React from "react";
import BoxNumber from "./BoxNumber";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import MyErrorBoundary from "./MyErrorBoundary";

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

class BoxNumbers extends React.PureComponent<any, any> {
  render() {
    return (
      <>
        <MyErrorBoundary>
          <Droppable droppableId={this.props.id}>
            {(provided, snapshot) => (
              <BoxNumberDiv
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.nums.map((number: any, index: number) => (
                  <BoxNumber
                    key={index + "-" + number}
                    num={number}
                    index={index}
                  ></BoxNumber>
                ))}
                {provided.placeholder}
              </BoxNumberDiv>
            )}
          </Droppable>
        </MyErrorBoundary>
      </>
    );
  }
}

export default BoxNumbers;
