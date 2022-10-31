import Display from "./display";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  // const [button, setButton] = useState(false);
  const [userdata, setUserdata] = useState([]);

  const apicall = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      // console.log(res.data);
      setUserdata(res.data);
    });
  };

  // console.log(Object.keys(userdata));

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
      {Object.keys(userdata).length > 0 ? (
        <Display
          image={userdata.avatar_url}
          Username={userdata.login}
          Location={userdata.location}
          github={userdata.created_at.slice(0, 10)}
        />
      ) : (
        console.log("userdata is empty!")
      )}
    </div>
  );
}

export default App;
