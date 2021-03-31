import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

// Styles
import './App.scss';
import BugAdder from './BugAdder';
import BugList from './BugList';

export default function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h1 className="app-title">Bug Log</h1>
      <BugAdder dispatch={dispatch} />
      <BugList bugs={store} dispatch={dispatch} />
    </React.Fragment>
  );
}
