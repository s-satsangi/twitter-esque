//  the Users slice of the redux store
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: lastId++,
        username: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;

export default slice.reducer;
