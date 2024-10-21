import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // cannot directly assign to the state, but you can return it.
      return state.filter((user, index) => index !== action.payload);
    },
    deleteUsers(state) {
      return [];
    },
  },
});

// console.log("actions:", userSlice.actions);
// console.log("reducers:", userSlice.reducer);

export default userSlice.reducer;
export const { addUser, removeUser, deleteUsers } = userSlice.actions;
