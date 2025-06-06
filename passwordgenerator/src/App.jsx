import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //pravimo password generator
  const [length, setLength] = useState(8); // dužina lozinke
  const [numberAllowed, setNumberAllowed] = useState(false); // da li su brojevi dozvoljeni
  const [charAllowed, setCharAllowed] = useState(false); // da li su specijalni karakteri dozvoljeni
  const [password, setPassword] = useState(""); // generisana lozinka
  const [copied, setCopied] = useState(false); // dodajemo state za poruku

  const passwordRef = useRef(null); // referenca na input polje za lozinku

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"; // dodajemo brojeve ako su dozvoljeni
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?"; // dodajemo specijalne karaktere ako su dozvoljeni

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length); // generišemo nasumičan indeks
      pass += str.charAt(char); // dodajemo karakter na lozinku
    }

    setPassword(pass); // postavljamo generisanu lozinku
  }, [length, numberAllowed, charAllowed]);
  //[length, numberAllowed, charAllowed] su zavisnosti koje se koriste u generisanju lozinke

  //dodali smo UseEffect da se lozinka generiše svaki put kada se promeni neka od zavisnosti
  useEffect(() => {
    generatePassword();
    // kada se promeni length, numberAllowed ili charAllowed, generišemo novu lozinku
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
    setCopied(true); // prikazujemo poruku
    setTimeout(() => setCopied(false), 2000); // sakrivamo poruku posle 2 sekunde
  }; // kopiramo lozinku u clipboard

  return (
    <div
      id="container"
      className="mt-20 w-full min-h-[320px] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto shadow-md rounded-lg px-4 py-6 bg-gray-800 text-orange-500"
    >
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4">
        Password generator
      </h1>
      <div className="flex flex-col sm:flex-row shadow rounded-lg overflow-hidden mb-4 gap-2">
        <input
          type="text"
          value={password}
          className="outline-none w-full px-4 py-2 text-base md:text-lg bg-gray-700 text-white rounded"
          placeholder="password"
          readOnly
          ref={passwordRef} // referenca na input polje
        />
        <button
          onClick={copyToClipboard}
          className="outline-none bg-blue-700 text-white px-4 py-2 rounded hover:cursor-pointer active:bg-orange-500 transition-colors duration-100 text-base md:text-lg"
        >
          {" "}
          copy
        </button>
      </div>

      <div className="flex flex-col sm:flex-row text-sm gap-2 mb-2">
        <div className="flex items-center gap-2 flex-1">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label
            htmlFor="lenght"
            className="whitespace-nowrap"
          >{`Length ${length}`}</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>

      <div className="flex justify-center items-center max-w-md w-full mx-auto mt-2.5 min-h-[32px]">
        {copied && (
          <h1 className="text-green-400 text-center text-base md:text-lg">
            Password copied!
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
