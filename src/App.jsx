import { useState } from "react";
import "./App.css";

function App() {
  const [color,setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 bg-amber-50 rounded-3xl py-3 gap-4 text-white">
          <button className="bg-red-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("red")} >Red</button>
          <button className="bg-green-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("green")}>Green</button>
          <button className="bg-blue-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("blue")}>Blue</button>
          <button className="bg-yellow-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("#FBC02D")}>Yellow</button>
          <button className="bg-indigo-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("#303F9F")}>Indigo</button>
          <button className="bg-pink-400 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("#EC407A")}>Pink</button>
          <button className="bg-gray-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("gray")}>Gray</button>
          <button className="bg-purple-700 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("purple")}>Purple</button>
          <button className="bg-amber-200 rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3 text-black" onClick={() => setColor("#FFE082")}>Cream</button>
          <button className="bg-black rounded-3xl text-[1rem] w-fit gap-2 px-2 py-3" onClick={() => setColor("black")}>Black</button>
        </div>
      </div>
    </>
  );
}

export default App;
