import React, { useState } from "react";
import Button from "../../button";

const ConfirmModal = ({ isOpen, onClose, isConfirm, children }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-ungu-muda px-4 py-3">
            <div className="flex justify-between items-center">
              <p className="text-white font-bold">Peringatan!</p>
              <button onClick={onClose} className="text-white">
                &#10005;
              </button>
            </div>
          </div>
          <div className="bg-white px-4 py-5">
          <p>{children}</p>
            <div className="flex gap-x-4 mt-3">
              <Button onClick={isConfirm}>Hapus</Button>
              <Button onClick={onClose}>Batal</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
