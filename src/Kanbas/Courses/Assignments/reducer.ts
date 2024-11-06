import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, { payload: assignment }) => {
        const newAssignment: any = {
          _id: new Date().getTime().toString(),
          title: assignment.title,
          description: assignment.description,
          dueDate: assignment.dueDate,
          courseId: assignment.courseId,
        };
        state.assignments = [...state.assignments, newAssignment] as any;
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          assignment => assignment._id !== action.payload
        );
      },
  
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        ) as any;
      },
      markAssignmentComplete: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((a: any) =>
          a._id === assignmentId ? { ...a, completed: true } : a
        ) as any;
      },
    },
  });
  
  export const { addAssignment, deleteAssignment, updateAssignment, markAssignmentComplete } =
    assignmentsSlice.actions;
  export default assignmentsSlice.reducer;