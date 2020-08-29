import * as React from "react";
import BoxNumber from "./BoxNumber";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import MyErrorBoundary from "./MyErrorBoundary";

const BoxNumberDiv = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 99%;
  height: auto;
  min-height: 100px;
  margin: auto;
  transition: background-color 0.2s ease;
  box-shadow: 0px 3px 2px -1px rgba(0, 0, 0, 0.3),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
  background-color: ${(props: {
    isDraggingOver: boolean;
    id: string;
    isEven: boolean;
    isOdd: boolean;
  }) =>
    (props.id === "odd-dp" && props.isOdd) ||
    (props.id === "even-dp" && props.isEven)
      ? "#E56B6F"
      : props.isDraggingOver
      ? "skyblue"
      : "white"};
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
                id={this.props.id}
                isEven={this.props.isEven}
                isOdd={this.props.isOdd}
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
