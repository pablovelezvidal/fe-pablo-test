import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import CachedIcon from "@material-ui/icons/Cached";

import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

import {
  addAll,
  addEven,
  addOdd,
  setFeedbackEven,
  setFeedbackOdd,
  removeFeedback,
  requestApiData,
  resetNumbers,
} from "../actions";
import BoxNumbersContainer from "../components/ui/BoxNumbers";
import { myState } from "../store/index";

const NumbersDiv = styled(Grid)`
  background-color: white;
  z-index: 10;
`;

const WaterMarkInfo = styled.h3`
  color: #ddd;
`;

const AllNumbersDiv = styled(NumbersDiv)`
  width: 60%;
  margin: auto;
`;

const EvenNumbersDiv = styled.div`
  position: absolute;
  bottom: 5%;
  right: 2%;
  width: 45%;
`;
const OddNumbersDiv = styled.div`
  position: absolute;
  bottom: 5%;
  left: 2%;
  width: 45%;
`;

const MainContainer = (props: any) => {
  const { onRequestApiData } = props;

  React.useEffect(() => {
    onRequestApiData();
  }, [onRequestApiData]);

  const onDragStartFn = () => {
    document.body.style.color = "orange";
  };

  const onDragUpdateFn = (result: any) => {
    const { destination, draggableId } = result;

    if (destination) {
      if (destination.droppableId === "odd-dp" && !isOdd(draggableId)) {
        props.onAddFeedbackOdd();
      } else if (destination.droppableId === "even-dp" && isOdd(draggableId)) {
        props.onAddFeedbackEven();
      }
    }
  };

  const onDragEndFn = (result: any) => {
    document.body.style.color = "inherit";
    props.onRemoveFeedback();

    const { destination, source, reason, draggableId } = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    const isSameDestinationThanSource: boolean =
      destination.droppableId === source.droppableId;
    if (isSameDestinationThanSource) {
      return;
    }

    if (destination.droppableId === "all-dp") {
      props.onAddAll(parseInt(draggableId));
    } else if (destination.droppableId === "even-dp" && !isOdd(draggableId)) {
      props.onAddEven(parseInt(draggableId));
    } else if (destination.droppableId === "odd-dp" && isOdd(draggableId)) {
      props.onAddOdd(parseInt(draggableId));
    }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEndFn}
      onDragStart={onDragStartFn}
      onDragUpdate={onDragUpdateFn}
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Fab
            color="secondary"
            onClick={() => {
              props.onResetNumbers();
            }}
          >
            <CachedIcon />
          </Fab>
          <AllNumbersDiv>
            <BoxNumbersContainer
              nums={props.allNums}
              id="all-dp"
            ></BoxNumbersContainer>
          </AllNumbersDiv>
        </Grid>
        <EvenNumbersDiv>
          <WaterMarkInfo>Drop Even Here</WaterMarkInfo>
          <BoxNumbersContainer
            nums={props.evenNums}
            id="even-dp"
            isEven={props.isEvenVal}
          ></BoxNumbersContainer>
        </EvenNumbersDiv>
        <OddNumbersDiv>
          <WaterMarkInfo>Drop Odd Here</WaterMarkInfo>
          <BoxNumbersContainer
            nums={props.oddNums}
            id="odd-dp"
            isOdd={props.isOddVal}
          ></BoxNumbersContainer>
        </OddNumbersDiv>
      </Grid>
    </DragDropContext>
  );
};

const isOdd = (num: number) => num % 2 === 0;

const mapStateToProps = (state: myState) => ({
  allNums: state.allNums,
  evenNums: state.evenNums,
  oddNums: state.oddNums,
  isOddVal: state.feedback.isOddVal,
  isEvenVal: state.feedback.isEvenVal,
});

const mapDispatchToProps = (dispatch: any) => ({
  onAddAll(num: number) {
    dispatch(addAll(num));
  },
  onAddEven(num: number) {
    dispatch(addEven(num));
  },
  onAddOdd(num: number) {
    dispatch(addOdd(num));
  },
  onAddFeedbackOdd() {
    dispatch(setFeedbackOdd());
  },
  onAddFeedbackEven() {
    dispatch(setFeedbackEven());
  },
  onRemoveFeedback() {
    dispatch(removeFeedback());
  },
  onRequestApiData() {
    dispatch(requestApiData());
  },
  onResetNumbers() {
    dispatch(resetNumbers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
