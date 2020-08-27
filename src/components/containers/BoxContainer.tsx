import * as React from "react";
import BoxNumbersContainer from "../ui/BoxNumbersContainer";
import { Droppable } from "react-beautiful-dnd";

class BoxContainer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      nums: props.nums,
    };
  }
  render() {
    return (
      <Droppable droppableId="dp1">
        {(provided, snapshot) => (
          <BoxNumbersContainer
            nums={this.state.nums}
            {...provided.droppableProps}
            innerRef={provided.innerRef}
          >
            {provided.placeholder}
          </BoxNumbersContainer>
        )}
      </Droppable>
    );
  }
}

export default BoxContainer;
