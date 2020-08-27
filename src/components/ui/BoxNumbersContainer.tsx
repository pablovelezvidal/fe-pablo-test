import * as React from "react";
import BoxNumber from "../ui/BoxNumber";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const BoxNumberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
  text-align: center;
  background-color: #ddd;
  border: 1px solid red;
`;

class BoxNumbersContainer extends React.Component<any, any> {
  render() {
    debugger;
    return (
      <Droppable droppableId="dp1">
        {(provided, snapshot) => (
          <BoxNumberContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {this.props.nums.listNumbers.map((number: any, index: number) => (
              <BoxNumber key={index + "-" + number} num={number}></BoxNumber>
            ))}
          </BoxNumberContainer>
        )}
      </Droppable>
    );
  }
}

export default BoxNumbersContainer;
