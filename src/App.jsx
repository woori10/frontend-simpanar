import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello")
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
