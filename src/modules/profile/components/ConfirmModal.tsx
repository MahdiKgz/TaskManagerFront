"use client";

import { close } from "@/src/redux/slices/modalSlice";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CloseIcon from "@/src/icons/CloseIcon";

interface IModalProps {
  children: ReactNode;
}

const ConfirmModal: React.FC<IModalProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") dispatch(close());
  };

  const handleClickOverlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      dispatch(close());
    }
  };

  return createPortal(
    <div
      onClick={handleClickOverlay}
      onKeyDown={handleKeyDown}
      className="justify-center items-center fixed text-base-100 z-40 inset-0 brightness-75 backdrop-blur-sm flex w-full h-screen"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 1, staggerChildren: 0.5 },
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-base-200 text-md w-full sm:w-[480px] h-auto flex flex-col items-start z-50 px-3.5 md:px-8 py-6 md:py-8 gap-5 rounded-lg"
        >
          <div className="w-full flex items-center justify-end">
            <button
              className="btn btn-circle"
              onClick={() => dispatch(close())}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex w-full flex-col items-center">{children}</div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
