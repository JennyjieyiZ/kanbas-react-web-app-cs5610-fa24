import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
    <div
      style={{
        borderRadius: "20px",
        border: "solid",
        display: "inline-block",
        padding: "0px 10px", // Add padding to create space around the text
      }}
    >
      <span>40% of Total</span>
    </div>
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
