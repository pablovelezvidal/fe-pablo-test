import * as React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const NumberContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  padding: 3px;
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #22ee22;
  border: 2px solid blue;
`;

class BoxNumber extends React.Component<{ num: number }, {}> {
  render() {
    let Comp = <p>No comp</p>;
    if (this.props && this.props.num) {
      Comp = (
        <div>
          <Draggable
            draggableId={"id-" + this.props.num!}
            key={"key-" + Math.random() * 100}
            index={this.props.num!}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <NumberContainer>{this.props.num}</NumberContainer>
              </div>
            )}
          </Draggable>
        </div>
      );
    }
    return Comp;
  }
}

export default BoxNumber;
