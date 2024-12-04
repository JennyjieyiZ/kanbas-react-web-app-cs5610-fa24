import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
interface Assignment {
  _id: string;
  title: string;
  course: string;
  lessons: any[];
  editing?: boolean;
}
interface AssignmentState {
  assignments: Assignment[];
}

const initialState:AssignmentState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

      setAssignments: (state, action: PayloadAction<Assignment[]>) => {
        state.assignments = action.payload;
    },  
    
      addAssignment: (state, { payload: assignment }) => {
        const newAssignment: any = {
          _id: new Date().getTime().toString(),
          title: assignment.title,
          description: assignment.description,
          dueDate: assignment.dueDate,
          course: assignment.course,
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
      editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((m: any) =>
            m._id === assignmentId ? { ...m, editing: true } : m
        ) as any;
    },
    },
  });
  
  export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment, markAssignmentComplete } =
    assignmentsSlice.actions;
  export default assignmentsSlice.reducer;