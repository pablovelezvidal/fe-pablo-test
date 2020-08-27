import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BoxNumbers } from "../../Types";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import BoxNumbersContainer from "./BoxNumbersContainer";

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

const AllNumbersContainer = styled.div`
  text-align: center;
  width: 70%;
  margin: auto;
  min-height: 20%;
  height: auto;
  background-color: black;
  border: 2px dotted gray;
  margin-top: 10%;
`;

const EvenNumbersContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 40%;
  min-height: 20%;
  height: auto;
  background-color: white;
  border: 2px dotted green;
  bottom: 15%;
  position: fixed;
  margin: 5px;
`;
const OddNumbersContainer = styled.div`
  display: flex;
  align-self: flex-end;
  width: 40%;
  min-height: 20%;
  height: auto;
  right: 0;
  background-color: white;
  border: 2px dotted purple;
  bottom: 15%;
  position: fixed;
  margin: 5px;
`;

const MainContent = (props: any) => {
  const classes = useStyles();

  const onDragEndFn = (result: any) => {
    const { destination, source, reason } = result;
    if (!destination || reason === "CANCEL") {
      return;
    }

    if (
      destination.droppableId === source.doppableId &&
      destination.index === source.index
    ) {
      return;
    }
    console.log("end of dragging");
  };

  return (
    <DragDropContext onDragEnd={onDragEndFn}>
      <Grid container justify="center">
        <Grid item className={classes.boxesContainer}>
          <AllNumbersContainer>
            <BoxNumbersContainer
              nums={props.nums}
              id="dp1"
            ></BoxNumbersContainer>
          </AllNumbersContainer>
          <EvenNumbersContainer>
            <BoxNumbersContainer
              nums={{ listNumbers: [] }}
              id="dp2"
            ></BoxNumbersContainer>
          </EvenNumbersContainer>
          <OddNumbersContainer>
            <BoxNumbersContainer
              nums={{ listNumbers: [] }}
              id="dp3"
            ></BoxNumbersContainer>
          </OddNumbersContainer>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default MainContent;
