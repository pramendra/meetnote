import { useState } from "react";
import viteLogo from "/vite.svg";
import "./../global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card bg-red-50">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
