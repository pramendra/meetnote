import { useState } from "react";
import Modal from "~components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold">Hello, world!</h2>
          <p>This is a movable and resizable modal.</p>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>
      </div>
    </>
  );
}

export default App;
