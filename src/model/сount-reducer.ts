export type Count = number 

const  initialState: Count = 0

export const CountReducer = (state: Count = initialState, action: Action) => {
  // debugger
  switch (action.type) {
    case 'INCREASE-COUNT': {
      const newCount = state + 1
      return newCount;
    }
    case 'REDUCING-COUNT': {
      const newCount = state - 1
      return newCount;
    }

    default: 
      return state
  }
};

export const increaseCountAC = () => {
  return {
		type: 'INCREASE-COUNT',
		payload: {},
	} as const;
};

export const reducingCountAC = () => {
  return {
		type: 'REDUCING-COUNT',
		payload: {},
	} as const;
};

type IncreaseCountAC = ReturnType<typeof increaseCountAC>
type ReducingCountAC = ReturnType<typeof reducingCountAC>

type Action = IncreaseCountAC | ReducingCountAC;