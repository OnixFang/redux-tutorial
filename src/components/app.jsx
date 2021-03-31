import './app.scss';
import { useSelector } from 'react-redux';
import React from 'react';
import Bug from './bug';

export default function App() {
  const store = useSelector((state) => state);
  console.log(store);

  const bugList = store.map((bug) => <Bug key={bug.id} bug={bug} />);

  return (
    <React.Fragment>
      <h1 className="app-title">Bug Log</h1>
      <ul className="bug-list">{bugList}</ul>
    </React.Fragment>
  );
}

// import store from './store';
// import { bugAdded, bugRemoved, bugResolved } from './actions';

// const unsubscribe = store.subscribe(() => {
//   console.log('Store changed!', store.getState());
// });

// store.dispatch(bugAdded('Ivern turns invisible on wall.'));
// store.dispatch(bugAdded('Viego gets 1000 stacks on double kill.'));
// // unsubscribe();
// store.dispatch(bugAdded("Nunu's snowball does not dissapear after hitting champ."));
// store.dispatch(bugRemoved(2));
// store.dispatch(bugResolved(3));
