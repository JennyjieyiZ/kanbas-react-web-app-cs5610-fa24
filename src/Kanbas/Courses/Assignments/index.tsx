import React from "react";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { BsGripVertical, BsCaretDownFill, BsJournal } from "react-icons/bs";
import { useParams } from "react-router-dom";
import assignments from "../../Database/assignments.json";
import courses from "../../Database/courses.json";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  // Filter assignments for the course
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />{" "}
            <BsCaretDownFill className="me-2 fs-3" />
            {courses.find((course) => course._id === cid)?.name} Assignments
            <AssignmentsControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {filteredAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <div className="d-flex align-items-center me-2" style={{ minWidth: "50px" }}>
                  <BsGripVertical className="me-2 fs-3" />
                  <BsJournal className="me-2 fs-3" />
                </div>
                <div>
                  <a
                    className="wd-assignment-link"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <b>{assignment.title}</b>
                  </a>
                  <p className="mb-0">
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> {assignment.availableDate} | <b>Due</b>{" "}
                    {assignment.dueDate} | {assignment.points} pts
                  </p>
                </div>
                <div className="d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>
                  <HomeworkControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      dispatch(deleteAssignment(assignmentId))
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}