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
