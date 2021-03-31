import React from 'react';
import { useDispatch } from 'react-redux';
import { bugAdded } from '../state/actions';

export default function BugAdder(props) {
  const dispatch = useDispatch();
  let newBug = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(bugAdded(newBug.value));
    // Reset input value
    newBug.value = '';
  };

  return (
    <form className="bug-adder" onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" className="text-input" ref={(el) => (newBug = el)} required />
        <input type="submit" className="btn red" value="Add" />
      </div>
    </form>
  );
}
