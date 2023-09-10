import { SUPPORTED_ROLES, ACTIONS_MODAL } from "../constants";

type USER_ROLES = keyof typeof SUPPORTED_ROLES;

export interface UserType {
  id: number;
  username: string;
  email: string;
  phone: number;
  role: USER_ROLES;
}

export interface UserErrors {
  usernameError: string;
  emailError: string;
  phoneError: string;
}

export type UserArray = UserType[]

export interface initialState {
  Users: UserArray,
  loading: boolean
}

export interface RootState {
  userReducer: initialState
}

type ACTIONS = keyof typeof ACTIONS_MODAL

export interface StateModal {
  createModal: boolean,
  editModal: boolean,
  reviewModal: boolean,
  removeModal: boolean
}

