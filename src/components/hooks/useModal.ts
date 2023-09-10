import { useActions } from "./useActions";
import { useState } from "react"
import { type StateModal, type UserType, type ACTIONS } from "../types";
import { INITIAL_STATE_USER, ACTIONS_MODAL } from "../../constants";



export function useModal() {
  const [modal, ShowModal] = useState<StateModal>({
    createModal: false,
    editModal: false,
    reviewModal: false,
    removeModal: false
  });


  const { usersSaved } = useActions();

  const [userReview, setUserToReview] = useState<UserType>(INITIAL_STATE_USER);

  function setModalAction(Action: ACTIONS, id: number) {
    const userToReview = usersSaved.find((user: UserType) => user.id === id);

    if (Action === ACTIONS_MODAL.create) {
      ShowModal({
        ...modal,
        createModal: true,
      });
    }

    if (Action === ACTIONS_MODAL.edit) {
      ShowModal({
        ...modal,
        editModal: true,
      });
      if (userToReview) {
        setUserToReview(userToReview);
      }
    }

    if (Action === ACTIONS_MODAL.review) {
      ShowModal({
        ...modal,
        reviewModal: true,
      });
      if (userToReview) {
        setUserToReview(userToReview);
      }
    }

    if (Action === ACTIONS_MODAL.remove) {
      ShowModal({
        ...modal,
        removeModal: true,
      });
      if (userToReview) {
        setUserToReview(userToReview);
      }
    }
  }

  function closeModal() {
    ShowModal({
      createModal: false,
      editModal: false,
      reviewModal: false,
      removeModal: false
    });
  }

  return {
    closeModal,
    setModalAction,
    userReview,
    modal,
  }

}