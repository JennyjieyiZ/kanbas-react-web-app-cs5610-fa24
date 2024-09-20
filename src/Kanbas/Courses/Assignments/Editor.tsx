export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
          Your full name and section 
          Links to each of the lab assignments Link to the Kanbas application
          Links to all relevant source code repositories 
          The Kanbas application should include a link to navigate back to the landing page
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
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
            <label htmlFor="wd-media-recordings	">Media Recording</label><br/>

            <input type="checkbox" id="wd-student-annotation	"name="submission-options" value="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" id="wd-file-upload	"name="submission-options" value="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label><br/>



          </td>
        </tr>

        {/* <tr>
        <td align="right" valign="top"><label>Online Entry Options</label></td>

        <td>
        <input type="checkbox" id="wd-text-entry" name="entry-option" value="Text Entry">
        <label htmlFor="wd-text-entry">Text Entry</label><br>

        

        </td>
        </tr> */}

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

      <button>Cancel</button>
      <button>Save</button>
    </div>
);
}

  
  