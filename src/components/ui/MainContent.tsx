import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import BoxNumbersContainer from "./BoxNumbers";

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
`;
const OddNumbersDiv = styled(NumbersDiv)`
  align-self: flex-end;
  width: 40%;
  right: 0;
  border-color: purple;
  bottom: 15%;
  position: fixed;
  margin: 5px;
`;

interface myState {
  allNums: number[];
  oddNums: number[];
  evenNums: number[];
}

const MainContent = () => {
  const classes = useStyles();

  const [boxesData, setBoxesData] = React.useState<myState>({
    allNums: [11, 10, 9, 1, 2, 3, 4, 5, 6, 7, 8],
    oddNums: [],
    evenNums: [],
  });

  const onDragEndFn = (result: any) => {
    console.log(result);
    const { destination, source, reason } = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    const newState = { ...boxesData };

    if (destination.droppableId === "all-dp") {
      newState.allNums.push(source.index);
    } else if (destination.droppableId === "even-dp") {
      newState.allNums = newState.allNums.filter((num) => num !== source.index);
      newState.oddNums = newState.oddNums.filter((num) => num !== source.index);
      newState.evenNums.push(source.index);
    } else if (destination.droppableId === "odd-dp") {
      newState.oddNums.push(source.index);
      newState.allNums = newState.allNums.filter((num) => num !== source.index);
      newState.evenNums = newState.evenNums.filter(
        (num) => num !== source.index
      );
    }
    setBoxesData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEndFn}>
      <Grid container justify="center">
        <Grid item className={classes.boxesContainer}>
          <AllNumbersDiv>
            <BoxNumbersContainer
              nums={boxesData.allNums}
              id="all-dp"
            ></BoxNumbersContainer>
          </AllNumbersDiv>
          <EvenNumbersDiv>
            <BoxNumbersContainer
              nums={boxesData.evenNums}
              id="even-dp"
            ></BoxNumbersContainer>
          </EvenNumbersDiv>
          <OddNumbersDiv>
            <BoxNumbersContainer
              nums={boxesData.oddNums}
              id="odd-dp"
            ></BoxNumbersContainer>
          </OddNumbersDiv>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default MainContent;
