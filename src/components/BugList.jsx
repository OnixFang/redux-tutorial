import { bugRemoved, bugResolved } from '../state/actions';
import Bug from './Bug';

export default function BugList(props) {
  const handleResolve = (id) => {
    props.dispatch(bugResolved(id));
  };

  const handleRemove = (id) => {
    props.dispatch(bugRemoved(id));
  };

  const bugItems = props.bugs.map((bug) => (
    <Bug onResolve={() => handleResolve(bug.id)} onRemove={() => handleRemove(bug.id)} key={bug.id} bug={bug} />
  ));

  return bugItems.length ? (
    <ul className="bug-list">{bugItems}</ul>
  ) : (
    <div className="bug-list">No bugs to report!</div>
  );
}
