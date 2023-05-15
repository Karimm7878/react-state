import { useState } from "react";
import Person from './Person'
import './App.css'
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? " hide profile" : "show proflie"}
      </button>
      {show && <Person />}
    </div>
  );
}