import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div>
        <h1>Jieyi Zhou</h1>
        <h1>Section 3 for CS 5610</h1>
        <h1><a href="https://github.com/JennyjieyiZ/kanbas-react-web-app-cs5610-fa24">Github</a></h1>
        <h1>Labs</h1>
        <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Labs" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
);}



