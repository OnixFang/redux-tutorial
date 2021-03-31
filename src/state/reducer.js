import * as actions from './actionTypes';

let lastId = 0;
const baseState = [
  {
    id: -1,
    description: 'A base bug 1',
    resolved: false,
  },
  {
    id: -2,
    description: 'A base bug 2',
    resolved: false,
  },
  {
    id: -3,
    description: 'A base bug 3',
    resolved: false,
  },
];

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) => (bug.id !== action.payload.id ? bug : { ...bug, resolved: true }));

    default:
      // Test data
      // return baseState;
      return state;
  }
}
