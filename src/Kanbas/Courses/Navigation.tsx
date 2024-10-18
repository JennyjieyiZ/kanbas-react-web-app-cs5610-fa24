import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { courseId } = useParams(); // Get course ID from the URL
  const location = useLocation();   // Get current pathname
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Courses/${courseId}/${link}`;
        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border border-0 ${
              location.pathname.includes(link) ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}