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
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
      <h1 className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500">
        Password generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full px-4 py-2"
          placeholder="password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          {" "}
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="lenght">Lenght {length}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
