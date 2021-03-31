export default function Bug(props) {
  const { id, description, resolved } = props.bug;

  return (
    <li>
      <span>ID: {id}</span>
      <span className="description">Description: {description}</span>
      <span>Resolved: {resolved ? 'Yes' : 'No'}</span>
      <div className="actions">
        <button className="btn resolve">Resolve</button>
        <button className="btn remove">X</button>
      </div>
    </li>
  );
}
