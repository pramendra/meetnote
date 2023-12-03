import { useState } from "react";
import viteLogo from "/vite.svg";
import "./../global.css";

function App() {
  const [count, setCount] = useState(0);
  const appName = chrome.i18n.getMessage("appName");

  return (
    <>
      <div className="card bg-red-50">
        <h1>{appName}</h1>
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          {chrome.i18n.getMessage("count", count.toString())}
        </button>
      </div>
    </>
  );
}

export default App;
