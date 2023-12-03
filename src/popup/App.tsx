import { useState } from 'react';
import './../global.css';
import './index.css';

function PopupApp() {
  const [count, setCount] = useState(0);
  const appName = chrome.i18n.getMessage('appName');
  const handleButtonClick = () => {
    chrome.runtime.sendMessage({ action: 'startCaption' });
  };
  return (
    <>
      <div className="popup-container bg-red-50 flex flex-col">
        <h1>{appName}</h1>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          start live caption
        </button>
        <p className="py-4"></p>
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          {chrome.i18n.getMessage('count', count.toString())}
        </button>
      </div>
    </>
  );
}

export default PopupApp;
