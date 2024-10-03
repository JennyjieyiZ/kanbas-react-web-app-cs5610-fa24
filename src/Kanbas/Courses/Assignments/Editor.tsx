export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">

<div className="mb-3" style={{
    width: "80ch"}}>
    <label htmlFor="wd-name" className="form-label">
      Assignment Name</label>
    <input type="assignment" className="form-control"
      id="input1" placeholder="A1"/>
  </div>
  <div className="mb-3">
  <label htmlFor="wd-name" className="form-label"></label>
  <div
  id="wd-description"
  style={{
    width: "80ch",
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



<table style={{ width: "80ch" }}>
        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input
              id="wd-points"
              value={100}
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-group">Assignment Groups</label>
          </td>
          <td>
            <select
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option>PERCENTAGE</option>
            </select>
          </td>
        </tr>

        <tr>


          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option>Online</option>
            </select>
            <br />
            <label>Online Entry Options</label>
            <br />
            <input type="checkbox" id="wd-text-entry" name="submission-options" value="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br />
            <input type="checkbox" id="wd-website-url" name="submission-options" value="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label><br />
            <input type="checkbox" id="wd-media-recordings" name="submission-options" value="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label><br />
            <input type="checkbox" id="wd-student-annotation" name="submission-options" value="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br />
            <input type="checkbox" id="wd-file-upload" name="submission-options" value="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label><br />
          </td>

          
        </tr>

        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
            <input
              id="wd-assign-to"
              value="Everyone"
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input
              type="date"
              id="wd-due-date"
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input
              type="date"
              id="wd-available-from"
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </td>
          <td align="right" valign="top" style={{ paddingRight: "10px" }}>
            <label htmlFor="wd-available-until">Available until</label>
          </td>
          <td>
            <input
              type="date"
              id="wd-available-until"
              style={{
                width: "100%",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </td>
        </tr>
      </table>

      <div className="float-end">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">Save</button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">Cancel</button>
        
      </div>
    </div>
  );
}
    
        {/* <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points" >Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Groups</label>
          </td>
          <td>
            <select><option>ASSIGNMENTS</option></select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select><option>PERCENTAGE</option></select>
          </td>
        </tr>
       
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select><option>Online</option></select>
            <br/>
            <label>Online Entry Options</label>
            <br/>

            <input type="checkbox" id="wd-text-entry"name="submission-options" value="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" id="wd-website-url	"name="submission-options" value="wd-website-url	" />
            <label htmlFor="wd-website-url	">Website URL</label><br/>

            <input type="checkbox" id="wd-media-recordings	"name="submission-options" value="wd-media-recordings" />
            <label htmlFor="wd-media-recordings	">Media Recordings</label><br/>

            <input type="checkbox" id="wd-student-annotation	"name="submission-options" value="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" id="wd-file-upload	"name="submission-options" value="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label><br/>



          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
          <td>
          <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
          <input type="date" id="wd-due-date"  />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
          <input type="date" id="wd-available-from"  />
          </td>

          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Available until</label>
          </td>
          <td>
          <input type="date" id="wd-available-until"  />
          </td>
        </tr>
       
        
        
      </table>


    <div className="float-end">
      <button>Cancel</button>
      <button>Save</button>
    </div>

    </div>
);
} */}

  
  