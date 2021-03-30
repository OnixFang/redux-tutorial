import store from './store';

const action1 = {
  type: 'bugAdded',
  payload: { description: 'Ivern turns invisible on wall.' },
};

const action2 = {
  type: 'bugAdded',
  payload: { description: 'Viego gets 1000 stacks on double kill.' },
};

const action3 = {
  type: 'bugAdded',
  payload: {
    description: "Nunu's snowball does not dissapear after hitting champ.",
  },
};

const action4 = {
  type: 'bugRemoved',
  payload: {
    id: 3,
  },
};

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);

console.log(store.getState());
