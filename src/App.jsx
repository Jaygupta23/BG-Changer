import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#9195F6");
  return (
    <>
      
      <div
        className="w-screen h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
          <button
              className="outline-none border-white px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "red" }} onClick={()=>{setColor("red")}}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1  rounded-full text-white shadow-lg"
              style={{ background: "#944E63" }} onClick={()=>{setColor("#944E63")}}
            >
              Wine
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "orange" }} onClick={()=>{setColor("orange")}}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "Green" }} onClick={()=>{setColor("green")}}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "blue" }} onClick={()=>{setColor("blue")}}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "grey" }} onClick={()=>{setColor("grey")}}
            >
              Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "magenta" }} onClick={()=>{setColor("magenta")}}
            >
              Magenta
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ background: "olive" }} onClick={()=>{setColor("olive")}}
            >
              Olive
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
