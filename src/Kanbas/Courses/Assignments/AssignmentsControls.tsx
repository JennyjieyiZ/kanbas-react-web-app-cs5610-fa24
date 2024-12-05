import { FaPlus } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
export default function AssignmentsControls() {
  const navigate = useNavigate();
  const { cid } = useParams(); // Get courseId from route params

  const handleAddAssignment = async () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor`);
  };

  return (
    <div id="wd-modules-controls" className="text-nowrap">
        


        <div>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={handleAddAssignment}>
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
         Assignment </button>

         </div>

         <div>
         <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2"
                style={{ bottom: "1px" }} />
         Group </button>

         </div>

        

         <div className="input-group me-1 float-start" style={{ maxWidth: "500px" }}>
        <span className="input-group-text">
          <BiSearch />
        </span>
        <input
          type="text"
          id="wd-search-assignment"
          className="form-control"
          placeholder="Search..."
        />
      </div>
               


    </div>
);}