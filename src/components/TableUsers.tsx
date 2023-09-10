import { Card, Table } from "@tremor/react";
import { Modals, TableInfo, TableHeader, Header } from ".";
import { useModal } from "./hooks/useModal";
import { useActions } from "./hooks/useActions";
import { useUsers } from "./hooks/useUsers";

function TableUsers() {
  const { usersSaved } = useUsers();
  const { loading } = useActions();
  const { closeModal, setModalAction, userReview, modal } = useModal();

  return (
    <Card className="max-h-screen h-full w-full p-4 bg-white shadow-md overflow-hidden">
      <div
        className="rounded-xl h-full p-4 overflow-y-scroll"
        style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)" }}
      >
        <Header setModalAction={setModalAction} />
        <div className="max-h-[calc(100vh-100px)] ">
          <Table className="bg-[#f5f5f5] h-[90%] ">
            <TableHeader />
            <TableInfo
              loading={loading}
              usersSaved={usersSaved}
              setModalAction={setModalAction}
            />
          </Table>
        </div>
      </div>

      <Modals modal={modal} closeModal={closeModal} userReview={userReview} />
    </Card>
  );
}

export default TableUsers;
