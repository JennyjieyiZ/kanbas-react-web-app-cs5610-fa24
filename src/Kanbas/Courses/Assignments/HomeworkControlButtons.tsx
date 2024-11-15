import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

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
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={handleDeleteClick}
        style={{ cursor: 'pointer' }}
      />
      <IoEllipsisVertical className="fs-4" />

      <Modal show={showConfirm} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}