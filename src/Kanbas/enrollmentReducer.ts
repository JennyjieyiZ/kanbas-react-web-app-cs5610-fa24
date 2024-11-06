import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]"),
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action) => {
      state.enrollments.push(action.payload);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment:any) => enrollment.courseId !== action.payload
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;