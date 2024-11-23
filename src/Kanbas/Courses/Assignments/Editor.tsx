import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
// import assignments from '../../Database/assignments.json';
import courses from '../../Database/courses.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'; //useState
import { addAssignment, updateAssignment } from './reducer';


export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Find course and assignment data
  const course = courses.find((c:any) => c._id === cid)
  
  const {assignments} = useSelector((state: any) => state.assignmentsReducer);

  const assignment = assignments.find((a: any) => a._id === aid);


  // State variables to handle form fields
  const [title, setTitle] = useState(assignment ? assignment.title : '');
  const [description, setDescription] = useState(assignment ? assignment.description : '');
  const [points, setPoints] = useState(assignment ? assignment.points : '');
  const [availableDate, setAvailableDate] = useState(assignment ? assignment.availableDate : '');
  const [dueDate, setDueDate] = useState(assignment ? assignment.dueDate : '');
  const [availableUntilDate, setAvailableUntilDate] = useState(assignment ? assignment.availableUntilDate : '');

  //other variables

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleSave = () => {
    if (!assignment) {
      // Add new assignment
      const newAssignment = {
        _id: `A${Date.now()}`, // Generate a unique ID
        title,
        course: cid,
        description,
        points,
        availableDate,
        dueDate,
        availableUntilDate,
      };
      dispatch(addAssignment(newAssignment)); // Dispatch the action to add the assignment
    } else {
      // Update existing assignment
      const updatedAssignment = {
        ...assignment,
        title,
        description,
        points,
        availableDate,
        dueDate,
        availableUntilDate,
      };
      dispatch(updateAssignment(updatedAssignment)); // Dispatch the action to update the assignment
    }
    navigate(`/Kanbas/courses/${cid}/assignments`); // Redirect to assignments page after saving
  };

  
  
  // Cancel function to navigate back without saving
  const handleCancel = () => {
    navigate(`/Kanbas/courses/${cid}/assignments`);
  };

  
  return (
    <div id="wd-assignments-editor" className="container mt-4">
    <h2>{course.name}</h2> {/* Display course name */}

    {/* Input for Assignment Title */}
    <div className="mb-3">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input
        type="text"
        className="form-control"
        id="wd-name"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state on change
      />
    </div>

      {/* Description */}
      <div className="mb-3 col-md-12">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="wd-description"
          style={{
            whiteSpace: 'pre-wrap',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
          }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Points */}
      <div className="row mb-3">
        <div className="col-md-4 mb-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-8">
          <input
            type="number"
            id="wd-points"
            className="form-control"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
      </div>


            {/* Assignment Group, Display Grade as */}

        <div className="col-md-4 mb-3">
          <label htmlFor="wd-group" className="form-label">Assignment Groups</label>
          </div>
          <div className="col-md-8 mb-3">
          <select className="form-control col-md-6" id="wd-group">
            <option>ASSIGNMENTS</option>
          </select>
        </div>


        <div className="col-md-4 mb-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-8 mb-3">
          <select className="form-control" id="wd-display-grade-as">
            <option>PERCENTAGE</option>
          </select>
        </div>

          {/* Submission Type */}
        <div className="col-md-4 mb-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-8 mb-3">
        <div className="row-mb-3 border p-3 rounded">
          <select className="form-control" id="wd-submission-type">
            <option>Online</option>
          </select>
        
        
          <div>
            <label>Online Entry Options</label><br />
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-website-url" />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
              </div>
            </div>
          

        </div>
        
        

        </div>

      


      {/* Dates */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input
            type="text"
            id="wd-available-from"
            className="form-control"
            value={availableDate}
            onChange={(e) => setAvailableDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-due-date" className="form-label">Due Date</label>
          <input
            type="text"
            id="wd-due-date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-6 mt-3">
          <label htmlFor="wd-available-until" className="form-label">Available Until</label>
          <input
            type="text"
            id="wd-available-until"
            className="form-control"
            value={availableUntilDate}
            onChange={(e) => setAvailableUntilDate(e.target.value)}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-danger" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}