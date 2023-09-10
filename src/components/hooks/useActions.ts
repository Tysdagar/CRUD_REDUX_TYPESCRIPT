import { createUser, deleteUser, setUsers, editUser } from "../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserArray, UserType, RootState } from "../types.d";

export function useActions() {
  const dispatch = useDispatch();

  const usersSaved = useSelector((state : RootState)  => state.userReducer.Users)
  const loading = useSelector((state : RootState)  => state.userReducer.loading)

  function addNewUser(payload: UserType) {
    dispatch(createUser(payload));
  }

  function removeUser(payload: number) {
    dispatch(deleteUser(payload));
  }

  function setListOfUsers(payload: UserArray) {
    dispatch(setUsers(payload));
  }

  function setEditedUser(payload: UserType){
    dispatch(editUser(payload))
  }

  return {
    addNewUser,
    removeUser,
    setListOfUsers,
    setEditedUser,
    usersSaved,
    loading
  };
}
