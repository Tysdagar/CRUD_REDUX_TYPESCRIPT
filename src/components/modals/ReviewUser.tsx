import { UserType } from "../types";
import { Card, Text, Button } from "@tremor/react"; // Importa los componentes de Tremor según corresponda

interface Props {
  userToReview: UserType;
  closeModal: () => void;
}

const ReviewUser = ({ userToReview, closeModal }: Props) => {
  const { id, username, email, phone, role } = userToReview;

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Review User</h2>
      <div className="mb-4">
        <Text className="text-gray-600 mb-2">ID:</Text>
        <Text className="text-black text-lg font-semibold">{id}</Text>
      </div>
      <div className="mb-4">
        <Text className="text-gray-600 mb-2">Username:</Text>
        <Text className="text-black text-lg font-semibold">{username}</Text>
      </div>
      <div className="mb-4">
        <Text className="text-gray-600 mb-2">Email:</Text>
        <Text className="text-black text-lg">{email}</Text>
      </div>
      <div className="mb-4">
        <Text className="text-gray-600 mb-2">Phone:</Text>
        <Text className="text-black text-lg">{phone}</Text>
      </div>
      <div className="mb-4">
        <Text className="text-gray-600 mb-2">Role:</Text>
        <Text className="text-black text-lg">{role}</Text>
      </div>
      <Button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={closeModal}
      >
        Cerrar
      </Button>
    </Card>
  );
};

export default ReviewUser;
