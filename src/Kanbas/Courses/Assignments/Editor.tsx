import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Breadcrumb */}
      <h2>Course Name</h2>

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="input1"
          placeholder="A1"
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label"></label>
        <div
          id="wd-description"
          style={{
           
            whiteSpace: "pre-wrap",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          The assignment is <span style={{ color: "red" }}>available online</span>. <br />
          Submit a link to the landing page of your Web application running on Netlify. <br />
          The landing page should include the following:
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the Kanbas application</li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          The Kanbas application should include a link to navigate back to the landing page.
        </div>
        </div>

          
      {/* Points, Assignment Group, Display Grade as */}
      <div className="mb-3">
        <div>
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input
            type="number"
            id="wd-points"
            className="form-control"
            value={100}
          />
        </div>



        <div>
          <label htmlFor="wd-group" className="form-label">Assignment Groups</label>
          <select className="form-control" id="wd-group">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
        <div>
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select className="form-control" id="wd-display-grade-as">
            <option>PERCENTAGE</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="mb-3">
        <div >
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          </div>
          <div className=" border p-3 rounded">
          <select className="form-control" id="wd-submission-type">
            <option>Online</option>
          </select>
        
        <div>
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
      </div>

      {/* Assign, Due Date, Available From, Available Until */}

      <div >
          <label htmlFor="wd-assign" className="form-label">Assign</label>
          </div>
      <div className="mb-3 border p-3 rounded">
        <div >
          <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
          <input
            type="text"
            className="form-control"
            id="wd-assign-to"
            value="Everyone"
          />
        </div>
        <div>
          <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
          <input
            type="datetime-local"
            className="form-control"
            id="wd-due-date"
          />
        </div>

        <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
          <input
            type="datetime-local"
            className="form-control"
            id="wd-available-from"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="wd-available-until" className="form-label"><b>Available until</b></label>
          <input
            type="datetime-local"
            className="form-control"
            id="wd-available-until"
          />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
} 


  
  