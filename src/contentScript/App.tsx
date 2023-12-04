import React, { useState, useEffect, ReactNode } from 'react';
import Modal from '~components/Modal';
import useExtensionState from './../hooks/useExtensionState';
import { updateState } from '../state/extensionState';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleMessage = (msg: any) => {
      // Handle received messages
      if (msg.target === 'modal') {
        if (msg.type === 'toggleModal') {
          setIsOpen(!isOpen);
        }
      }
    };

    // Add listener when component mounts
    chrome.runtime.onMessage.addListener(handleMessage);

    // Remove listener when this component unmounts
    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, [isOpen]);

  return (
    <>
      <div>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          message
          <button onClick={() => setIsOpen(false)}>Close Modal</button>
        </Modal>
      </div>
    </>
  );
};

export default ModalComponent;

// const ModalComponent = () => {
//   const {
//     //
//     isCaptionModalEnabled,
//   } = useExtensionState();
//   useEffect(() => {
//     // Function to handle the message
//     const handleMessage = (request: any, sender: any, sendResponse: any) => {
//       if (request.action === 'startCaption') {
//         console.warn('triggered in content script');

//         updateState({
//           isCaptionModalEnabled: true,
//         });
//       }
//     };

//     // Add the message listener
//     chrome.runtime.onMessage.addListener(handleMessage);

//     // Cleanup function
//     // return () => {
//     //   chrome.runtime.onMessage.removeListener(handleMessage);
//     // };
//   }, []);

//   const closeModal = () => {
//     updateState({
//       isCaptionModalEnabled: false,
//     });
//   };

//   if (!isCaptionModalEnabled) {
//     return null;
//   }

//   return (
//     <>
//       <div>
//         <Modal isOpen={isCaptionModalEnabled} onClose={closeModal}>
//           message
//           <button onClick={closeModal}>Close Modal</button>
//         </Modal>
//       </div>
//     </>
//   );
// };
// export default ModalComponent;
