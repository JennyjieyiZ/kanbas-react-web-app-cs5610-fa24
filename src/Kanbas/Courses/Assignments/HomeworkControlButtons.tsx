import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function HomeworkControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true); // Show confirmation dialog
  };

  const confirmDelete = () => {
    deleteAssignment(assignmentId); // Call delete action
    setShowConfirm(false); // Close dialog
  };

  const cancelDelete = () => {
    setShowConfirm(false); // Close dialog without deleting
  };

  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
      <IoEllipsisVertical className="fs-4" />

      {showConfirm && (
        <div className="confirm-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-primary" onClick={confirmDelete}>Yes</button>
          <button className="btn btn-secondary" onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}