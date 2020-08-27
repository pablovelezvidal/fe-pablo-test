import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import BoxNumbersContainer from "./BoxNumbers";
import { connect } from "react-redux";

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

const MainContent = (props: any) => {
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

    if (destination.droppableId === "all-dp") {
    } else if (destination.droppableId === "even-dp") {
    } else if (destination.droppableId === "odd-dp") {
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEndFn}>
      <Grid container justify="center">
        <Grid item className={classes.boxesContainer}>
          <AllNumbersDiv>
            <BoxNumbersContainer
              nums={props.allNums}
              id="all-dp"
            ></BoxNumbersContainer>
          </AllNumbersDiv>
          <EvenNumbersDiv>
            <BoxNumbersContainer
              nums={props.evenNums}
              id="even-dp"
            ></BoxNumbersContainer>
          </EvenNumbersDiv>
          <OddNumbersDiv>
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

const mapStateToProps = (state: any) => ({
  allNums: state.allNums,
  evenNums: state.evenNums,
  oddNums: state.oddNums,
});

const mapDispatchToProps = (dispatch: any) => ({
  //   onNewDay({ resort, date, powder, backcountry }) {
  //     dispatch(addDay(resort, date, powder, backcountry));
  //   },
  //   onChange(value) {
  //     if (value) {
  //       dispatch(suggestResortNames(value));
  //     } else {
  //       dispatch(clearSuggestions());
  //     }
  //   },
  //   onClear() {
  //     dispatch(clearSuggestions());
  //   },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
