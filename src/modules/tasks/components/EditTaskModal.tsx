import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TTaskData } from "@/src/types/Tasks.types";
import EditTask from "./EditTask";

interface EditTaskModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  task: TTaskData;
}

function EditTaskModal({ isOpen, setIsOpen, task }: EditTaskModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key="modal"
            className="w-full"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          >
            <EditTask task={task} isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditTaskModal;
