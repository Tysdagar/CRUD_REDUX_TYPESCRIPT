import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../types.d";

const initialState: initialState = {
  Users: [] ,
  loading : true
};

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      const newUser = action.payload;
      state.Users = [...state.Users, newUser];
    },
    deleteUser: (state, action) => {
      const idUserToDelete  = action.payload;
      state.Users = state.Users.filter((user) => user.id !== idUserToDelete);
    },
    setUsers: (state, action) => {
      const users  = action.payload;
      state.Users = users;
      state.loading = false
    },
    editUser: (state, action) => {
      const userUpdated = action.payload

      const userIndex = state.Users.findIndex(user => user.id === userUpdated.id)

      state.Users[userIndex] = userUpdated

    }
  },
});

// Exporta las acciones del slice
export const { createUser, deleteUser, setUsers, editUser } = userSlice.actions;

// Exporta el reducer principal
export default userSlice.reducer;
