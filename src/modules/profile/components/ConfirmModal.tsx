import React from "react";

function ConfirmModal() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="fixed z-30">content</div>
      <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-10" />
    </div>
  );
}

export default ConfirmModal;
