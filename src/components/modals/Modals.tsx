import { Modal, CreateUser, EditUser, ReviewUser } from "..";
import { type StateModal, type UserType } from "../types";
import RemoveUser from "./RemoveUser";

interface Props {
  modal: StateModal;
  closeModal: () => void;
  userReview: UserType;
}

const Modals = ({ modal, closeModal, userReview }: Props) => {
  return (
    <>
      {modal.createModal && (
        <Modal>
          <CreateUser closeModal={closeModal} />
        </Modal>
      )}
      {modal.editModal && (
        <Modal>
          <EditUser closeModal={closeModal} userToEdit={userReview} />
        </Modal>
      )}
      {modal.reviewModal && (
        <Modal>
          <ReviewUser userToReview={userReview} closeModal={closeModal} />
        </Modal>
      )}
      {modal.removeModal && (
        <Modal>
          <RemoveUser userToRemove={userReview} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Modals;
