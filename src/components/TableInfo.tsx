import {
  TableCell,
  TableRow,
  TableBody,
  Badge,
  Button,
  Text,
} from "@tremor/react";
import { UserArray, UserType, ACTIONS } from "./types";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import { ReadIcon, EditIcon, RemoveIcon } from "../assets";

interface Props {
  loading: boolean;
  usersSaved: UserArray;
  setModalAction: (action: ACTIONS, userId: number) => void;
}

const TableInfo = ({ loading, usersSaved, setModalAction }: Props) => {
  return (
    <TableBody>
      {loading ? (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            Cargando Usuarios...
          </TableCell>
        </TableRow>
      ) : usersSaved.length > 0 ? (
        usersSaved.map((user: UserType) => (
          <TableRow key={user.id}>
            <TableCell>{user.username}</TableCell>
            <TableCell>
              <Text>{user.phone}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.role}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                {user.email}
              </Badge>
            </TableCell>
            <TableCell>
              <Button
                icon={ReadIcon}
                variant="secondary"
                size="md"
                className="mr-3"
                onClick={() => setModalAction("review", user.id)}
              ></Button>
              <Button
                icon={EditIcon}
                variant="secondary"
                size="md"
                className="mr-3"
                onClick={() => setModalAction("edit", user.id)}
              ></Button>
              <Button
                icon={RemoveIcon}
                variant="secondary"
                size="md"
                onClick={() => setModalAction("remove", user.id)}
              ></Button>
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={5} className="text-center">
            No existen usuarios.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableInfo;
