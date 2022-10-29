import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [button, setButton] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const apicall = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      console.log(res.data);
      setUserdata(res.data);
    });
  };

  return (
    <div className="App">
      <form>
        <input
          className="border-2 m-2"
          placeholder="Enter username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button onClick={apicall}>Enter</button>
      </form>
      <img className="h-32" src={userdata.avatar_url} />
      <h1>Name: {userdata.name}</h1>
      <h1>Username: {userdata.login}</h1>
      <h1>Location: {userdata.location}</h1>
      <h1>In GitHub Since: {userdata.created_at.slice(0, 10)}</h1>
    </div>
  );
}

export default App;
