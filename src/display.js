const display = (props) => {
  return (
    <div>
      <img className="h-32" src={props.image} />
      <h1>Name: {props.name}</h1>
      <h1>Username: {props.login}</h1>
      <h1>Location: {props.location}</h1>
      <h1>In GitHub Since: {props.github}</h1>
    </div>
  );
};

export default display;
