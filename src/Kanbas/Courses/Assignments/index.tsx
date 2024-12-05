import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { BsGripVertical, BsCaretDownFill, BsJournal } from "react-icons/bs";
import { useParams } from "react-router-dom";
// import assignments from "../../Database/assignments.json";
import courses from "../../Database/courses.json";
import { setAssignments, addAssignment, editAssignment, updateAssignment, deleteAssignment }
  from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentClient from "./client";

type Assignment = {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  notAvailableAt: string;
  course?: string;
};

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  const {assignments} = useSelector((state: any) => state.assignmentsReducer);

  // Filter assignments for the course
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!cid) return;
      try {
        const assignmentsData = await assignmentClient.findAssignmentsForCourse(cid);
        dispatch(setAssignments(assignmentsData));
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
  
    fetchAssignments();
  }, [cid, dispatch]);


  const handleAddAssignment = async (newAssignment: Assignment) => {
    if (!cid) return;
    try {
      const createdAssignment = await assignmentClient.createAssignment(cid, newAssignment);
      dispatch(addAssignment(createdAssignment));
    } catch (error) {
      console.error("Error creating assignment:", error);
    }
  };

  const handleEditAssignment = async (updatedAssignment: Assignment) => {
    try {
      const savedAssignment = await assignmentClient.updateAssignment(updatedAssignment);
      dispatch(updateAssignment(savedAssignment));
    } catch (error) {
      console.error("Error editing assignment:", error);
    }
  };

  useEffect(() => {
    const fetchAssignmentDetails = async () => {
      if (!cid || !assignments) return;
      try {
        const assignmentDetails = await assignmentClient.findAssignmentById(cid, assignments);
        console.log("Assignment Details:", assignmentDetails);
      } catch (error) {
        console.error("Error fetching assignment details:", error);
      }
    };
  
    fetchAssignmentDetails();
  }, [cid, assignments]);




  

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
            {filteredAssignments.map((assignment: any) => (
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
  deleteAssignment={async (assignmentId) => {
    try {
      await assignmentClient.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    } catch (error) {
      console.error("Error deleting assignment:", error);
    }
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