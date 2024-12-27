import { CountReducer, increaseCountAC, reducingCountAC } from "./сount-reducer";

let startState: number;

beforeEach(() => {
  startState = 0;
})

test('count should be increase', () => {
  const endState = CountReducer(startState, increaseCountAC());
  expect(endState).toBe(1)
})

test('count should be reducing', () => {
  const endState = CountReducer(startState, reducingCountAC());
  expect(endState).toBe(-1)
})