import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import BoxNumbersContainer from "./BoxNumbers";
import { connect } from "react-redux";
import {
  addAll,
  addEven,
  addOdd,
  setFeedbackEven,
  setFeedbackOdd,
  removeFeedback,
} from "../../actions";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  boxesContainer: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
}));

const NumbersDiv = styled.div`
  display: flex;
  min-height: 20%;
  height: auto;
  border: 2px dotted;
  background-color: white;
`;

const AllNumbersDiv = styled(NumbersDiv)`
  width: 70%;
  margin: auto;
  border-color: gray;
  margin-top: 10%;
`;

const EvenNumbersDiv = styled(NumbersDiv)`
  align-self: flex-end;
  width: 40%;
  border-color: green;
  bottom: 15%;
  position: fixed;
  margin: 5px;
  background-color: ${(props: { isEven: boolean }) =>
    props.isEven ? "red" : "white"};
`;
const OddNumbersDiv = styled(NumbersDiv)`
  align-self: flex-end;
  width: 40%;
  right: 0;
  border-color: purple;
  bottom: 15%;
  position: fixed;
  margin: 5px;
  background-color: ${(props: { isOdd: boolean }) =>
    props.isOdd ? "red" : "white"};
`;

interface myState {
  allNums: number[];
  oddNums: number[];
  evenNums: number[];
}

const MainContent = (props: any) => {
  const classes = useStyles();

  const onDragStartFn = (result: any) => {
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
      <Grid container justify="center">
        <Grid item className={classes.boxesContainer}>
          <AllNumbersDiv>
            <BoxNumbersContainer
              nums={props.allNums}
              id="all-dp"
            ></BoxNumbersContainer>
          </AllNumbersDiv>
          <EvenNumbersDiv isEven={props.isEvenVal}>
            <BoxNumbersContainer
              nums={props.evenNums}
              id="even-dp"
            ></BoxNumbersContainer>
          </EvenNumbersDiv>
          <OddNumbersDiv isOdd={props.isOddVal}>
            <BoxNumbersContainer
              nums={props.oddNums}
              id="odd-dp"
            ></BoxNumbersContainer>
          </OddNumbersDiv>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

const isOdd = (num: number) => num % 2 === 0;

const mapStateToProps = (state: any) => ({
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
