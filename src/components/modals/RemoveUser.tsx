import { Card, Button } from "@tremor/react";
import { UserType } from "../types";
import { useActions } from "../hooks/useActions";

interface Props {
  userToRemove: UserType;
  closeModal: () => void;
}

const RemoveUser = ({ userToRemove, closeModal }: Props) => {
  const { username, id } = userToRemove;

  const { removeUser } = useActions();

  function dispatchDeletedUser() {
    removeUser(id);
    closeModal();
  }

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Are you sure you want to delete the user {username}?
      </h1>
      <div className="mb-4 flex items-center">
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-5"
          onClick={dispatchDeletedUser}
        >
          Remove user
        </Button>

        <Button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={closeModal}
        >
          Close
        </Button>
      </div>
    </Card>
  );
};

export default RemoveUser;
