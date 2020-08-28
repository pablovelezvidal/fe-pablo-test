import C from "./constants";

export interface Action {
  type: string;
  payload: { num: number };
}

export function addAll<Action>(num: number) {
  return {
    type: C.ADD_ALL,
    payload: { num },
  };
}

export function addEven<Action>(num: number) {
  return {
    type: C.ADD_EVEN,
    payload: { num },
  };
}

export function addOdd<Action>(num: number) {
  return {
    type: C.ADD_ODD,
    payload: { num },
  };
}

export function setFeedbackOdd<Action>() {
  return {
    type: C.SET_FEEDBACK_ODD,
  };
}

export function setFeedbackEven<Action>() {
  return {
    type: C.SET_FEEDBACK_EVEN,
  };
}

export function removeFeedback<Action>() {
  return {
    type: C.REMOVE_FEEDBACK,
  };
}
