import React, { ReactNode } from "react";
import { Rnd } from "react-rnd";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <Rnd
        default={{
          x: window.innerWidth / 2 - 150,
          y: window.innerHeight / 2 - 150,
          width: 300,
          height: 300,
        }}
        minWidth={200}
        minHeight={200}
        bounds="window"
      >
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="flex justify-between items-center">
            <button className="p-1 bg-blue-500 text-white rounded">-</button>
            <h2 className="text-xl font-bold">Live Caption</h2>
            <button
              className="p-1 bg-red-500 text-white rounded"
              onClick={onClose}
            >
              x
            </button>
          </div>
          {children}
        </div>
      </Rnd>
    </div>
  );
};

export default Modal;
