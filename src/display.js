const display = (props) => {
  return (
    <div className="inline-flex justify-center items-center mt-10 p-5 rounded-lg bg-gradient-to-r from-blue-500 via-blue-450 to-blue-410">
      <img className="h-48 rounded-lg" src={props.image} />
      <div className="ml-5">
        <h1 className="font-bold text-3xl text-white">{props.name}</h1>
        <h1 className="text-2xl">-{props.username}</h1>
        <h1 className="text-x-lg pt-3">📍{props.location}</h1>
        <h1 className="pb-3">🚪{props.github}</h1>
        <a
          className="text-white bg-[#0077FF] p-1 pl-2 pr-2 rounded-lg"
          href={`https://github.com/${props.username}`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default display;
