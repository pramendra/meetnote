import { useState } from 'react';
// import useExtensionState from './../hooks/useExtensionState';
import { updateState } from '../state/extensionState';

import './../global.css';
import './index.css';

function PopupApp() {
  const appName = chrome.i18n.getMessage('appName');

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    chrome.runtime.sendMessage({ message: 'StartCaption' });
  };
  return (
    <>
      <div className="popup-container bg-red-50 flex flex-col">
        <h1>{appName}</h1>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          start live caption
        </button>
        <p className="py-4"></p>
      </div>
    </>
  );
}

export default PopupApp;
