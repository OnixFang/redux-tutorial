import store from './store';
import { bugAdded, bugRemoved } from './actions';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(bugAdded('Ivern turns invisible on wall.'));
store.dispatch(bugAdded('Viego gets 1000 stacks on double kill.'));
// unsubscribe();
store.dispatch(bugAdded("Nunu's snowball does not dissapear after hitting champ."));
store.dispatch(bugRemoved(2));
