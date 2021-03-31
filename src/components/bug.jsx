export default function Bug(props) {
  const { id, description, resolved } = props.bug;

  return (
    <li>
      <span>ID: {id}</span>
      <span className="description">Description: {description}</span>
      <span>Resolved: {resolved ? 'Yes' : 'No'}</span>
      <div className="actions">
        {!resolved ? (
          <button onClick={props.onResolve} className="btn resolve">
            Resolve
          </button>
        ) : (
          ''
        )}
        <button onClick={props.onRemove} className="btn remove">
          X
        </button>
      </div>
    </li>
  );
}
