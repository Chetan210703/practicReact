import { useState, useCallback ,useEffect,useRef} from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // if allowed char to str
    if (charAllowed) str += "!@#$%^&*()";
    // if allowed number add to str
    if (numberAllowed) str += "0123456789";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charAllowed, length, numberAllowed,setPassword]);
  //ref hook
  const passref = useRef(null);
  //to copy
  const copyPassToBoard = useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  //to dont call passwordgenerator unnccessary
  useEffect(() => {
    passwordGenerator();
  }, [charAllowed, numberAllowed, passwordGenerator, length]);

  return (
    <>
       <div className="h-screen w-full px-4 text-orange-400 bg-gray-800 flex justify-center items-center text-center">
      <div className="shadow rounded-lg overflow-hidden p-4 bg-gray-700 w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            name="password"
            className="outline-none w-full py-2 px-3 bg-gray-900 text-white rounded-lg"
            placeholder="Password"
            readOnly
            value={password}
            ref={passref}
          />
        </div>
        <div className="mb-4">
          <button 
            onClick={copyPassToBoard}
            className="bg-blue-500 py-2 px-4 text-white rounded-lg"
          >
            Copy
          </button>
        </div>
        <div className="mb-4">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer w-full"
          />
          <label className="block mt-2">Length: {length}</label>
        </div> 
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="charInput" className="ml-2">Allow Special Characters</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="ml-2">Allow Numbers</label>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
