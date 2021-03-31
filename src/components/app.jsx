import { useSelector, useDispatch } from 'react-redux';
import { bugRemoved, bugResolved } from '../state/actions';
import React from 'react';
import Bug from './Bug';
// Styles
import './App.scss';
import BugAdder from './BugAdder';

export default function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleResolve = (id) => {
    dispatch(bugResolved(id));
  };

  const handleRemove = (id) => {
    dispatch(bugRemoved(id));
  };

  const bugList = store.map((bug) => (
    <Bug onResolve={() => handleResolve(bug.id)} onRemove={() => handleRemove(bug.id)} key={bug.id} bug={bug} />
  ));

  return (
    <React.Fragment>
      <h1 className="app-title">Bug Log</h1>
      <BugAdder dispatch={dispatch} />
      {bugList.length ? <ul className="bug-list">{bugList}</ul> : <div className="bug-list">No bugs to report!</div>}
    </React.Fragment>
  );
}

// store.dispatch(bugAdded('Ivern turns invisible on wall.'));
// store.dispatch(bugAdded('Viego gets 1000 stacks on double kill.'));
// // unsubscribe();
// store.dispatch(bugAdded("Nunu's snowball does not dissapear after hitting champ."));
