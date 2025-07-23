import { close } from "@/src/redux/slices/modalSlice";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

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
      className="justify-center items-center fixed text-base-100 z-40 inset-0 brightness-75 backdrop-blur-sm flex w-full h-screen "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative overflow-hidden bg-white text-md w-auto h-outo flex flex-col justify-start items-center z-50 py-5 px-5 gap-5 rounded-md"
      >
        <div
          className="absolute font-extrabold rotate-45 top-2 right-2 w-5 h-5  p-1 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer "
          onClick={() => dispatch(close())}
        >
          +
        </div>
        <div className="flex w-full h-full flex-col">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmModal;
