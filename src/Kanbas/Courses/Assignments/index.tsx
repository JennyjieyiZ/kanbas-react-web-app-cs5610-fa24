import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import HomeworkControlButtons from "./HomeworkControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { BsJournal } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">

      
      <AssignmentsControls /><br /><br /><br /><br />

  <ul id="wd-modules" className="list-group rounded-0">
  
  <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
    <BsGripVertical className="me-2 fs-3" /> <BsCaretDownFill className="me-2 fs-3" />
     Assignments 
     <AssignmentsControlButtons />
     </div>


     <ul className="wd-lessons list-group rounded-0">
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
          <div className="d-flex align-items-center me-2" style={{ minWidth: "50px" }}>
              <BsGripVertical className="me-2 fs-3" />
              <BsJournal className="me-2 fs-3" />
            </div>


            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
                style={{ color: "black", textDecoration: "none" }}
              >
                <b>A1</b>
              </a>
              <p className="mb-0">
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May
                13 at 11:59pm | 100 pts
              </p>
            </div>
            
            <div className="d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>

            <HomeworkControlButtons />
            
            </div>
             </li>
        


             <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
          <div className="d-flex align-items-center me-2" style={{ minWidth: "50px" }}>
              <BsGripVertical className="me-2 fs-3" />
              <BsJournal className="me-2 fs-3" />
            </div>


            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
                style={{ color: "black", textDecoration: "none" }}
              >
                <b>A2</b>
              </a>
              <p className="mb-0">
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May
                20 at 11:59pm | 100 pts
              </p>
            </div>
            
            <div className="d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>

            <HomeworkControlButtons />
            
            </div>
             </li>
        




          <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
          <div className="d-flex align-items-center me-2" style={{ minWidth: "50px" }}>
              <BsGripVertical className="me-2 fs-3" />
              <BsJournal className="me-2 fs-3" />
            </div>


            <div>
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
                style={{ color: "black", textDecoration: "none" }}
              >
                <b>A3</b>
              </a>
              <p className="mb-0">
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May
                27 at 11:59pm | 100 pts
              </p>
            </div>
            
            <div className="d-flex align-items-center" style={{ whiteSpace: "nowrap" }}>

            <HomeworkControlButtons />
            
            </div>
             </li>




    </ul>




     </li>
     </ul>

     



      {/* <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <p>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</p>
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>
          <p>Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</p>
          
        </li>

        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a>
          <p>Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts</p>
          
        </li>
      </ul> */}
    </div>
);}