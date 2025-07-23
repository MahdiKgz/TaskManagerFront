import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  openModal: boolean;
  children: ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModal: React.FC<IModalProps> = ({
  setOpenModal,
  openModal,
  children,
}) => {
 
  const handelKeyDown = (e:React.KeyboardEvent) => {
    if (e.key === "Escape") setOpenModal(false);
  };

  const handelClickOverlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };
 
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  return createPortal(
    <div
      onClick={handelClickOverlay}
      onKeyDown={handelKeyDown}
      className="justify-center items-center fixed z-40 inset-0 brightness-75 backdrop-blur-sm flex w-full h-screen "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative overflow-hidden bg-white text-sm w-auto h-outo flex flex-col justify-start items-center z-50 py-5 px-5 gap-5 rounded-md"
      >
        <div
          className="absolute font-extrabold rotate-45 top-2 right-2 w-5 h-5  p-1 bg-gray-700 text-white rounded-full flex items-center justify-center cursor-pointer "
           onClick={() => setOpenModal(false)}
          
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

