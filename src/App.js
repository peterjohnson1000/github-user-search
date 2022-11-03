import Display from "./display";
import axios from "axios";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [userdata, setUserdata] = useState([]);

  const apicall = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        // console.log(res.data);
        setUserdata(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("no user found");
      });
  };

  console.log(Object.keys(userdata));
  console.log(userdata);

  return (
    <div className="h-screen bg-[#121212] text-[#C4C5C5] p-5">
      <form className="text-center">
        <input
          className="border bg-[#1D1D1D] p-3 rounded-full"
          placeholder="username"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button className="p-2 rounded-md bg-[#C4C5C5] ml-2" onClick={apicall}>
          🔍
        </button>
      </form>
      {Object.keys(userdata).length > 0 ? (
        <Display
          image={userdata.avatar_url}
          name={userdata.name}
          username={userdata.login}
          location={userdata.location}
          github={userdata.created_at.slice(0, 10)}
        />
      ) : (
        console.log("userdata is empty!")
      )}
    </div>
  );
}

export default App;
