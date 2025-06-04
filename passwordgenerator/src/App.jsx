import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //pravimo password generator
  const [length, setLength] = useState(8); // dužina lozinke
  const [numberAllowed, setNumberAllowed] = useState(false); // da li su brojevi dozvoljeni
  const [charAllowed, setCharAllowed] = useState(false); // da li su specijalni karakteri dozvoljeni
  const [password, setPassword] = useState(""); // generisana lozinka

  return (
   <div className=""></div>
  );
}

export default App;
