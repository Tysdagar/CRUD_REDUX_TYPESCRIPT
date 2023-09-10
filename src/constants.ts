import { type UserType } from "./components/types";

export const SUPPORTED_ROLES = {
  admin: "Administrador",
  editor: "Editor",
  user: "Usuario",
  moderator: "Moderador",
  guest: "Invitado",
};


export const ACTIONS_MODAL = {
  create: "create",
  edit: "edit",
  review: "review",
  remove: "remove"
}


export const INITIAL_STATE_USER: UserType = {
  id: 0,
  username: "",
  email: "",
  phone: 0,
  role: "guest",
}


export const Users: UserType[] = [
  {
    id: 1,
    username: "Viola Amherd",
    email: "viola.amherd@example.com",
    phone: 1234567890,
    role: "admin",
  },
  {
    id: 2,
    username: "Simonetta Sommaruga",
    email: "simonetta.sommaruga@example.com",
    phone: 9876543210,
    role: "editor",
  },
  {
    id: 3,
    username: "Alain Berset",
    email: "alain.berset@example.com",
    phone: 5555555555,
    role: "user",
  },
  {
    id: 4,
    username: "Ignazio Cassis",
    email: "ignazio.cassis@example.com",
    phone: 3333333333,
    role: "moderator",
  },
  {
    id: 5,
    username: "Ueli Maurer",
    email: "ueli.maurer@example.com",
    phone: 7777777777,
    role: "guest",
  },
  {
    id: 6,
    username: "Guy Parmelin",
    email: "guy.parmelin@example.com",
    phone: 9999999999,
    role: "user",
  },
  {
    id: 7,
    username: "Karin Keller-Sutter",
    email: "karin.keller-sutter@example.com",
    phone: 1231231234,
    role: "editor",
  },
];


