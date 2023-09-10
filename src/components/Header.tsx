import { Title, Button } from "@tremor/react";
import { CreateIcon } from "../assets";
import { ACTIONS } from "./types";

interface Props {
  setModalAction: (action: ACTIONS, userId: number) => void;
}

const Header = ({ setModalAction }: Props) => {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-white ">
      <Title>
        CRUD List Of Users || Typescript || Redux || Tremor by Tysdagar{" "}
      </Title>
      <Button
        icon={CreateIcon}
        onClick={() => setModalAction("create", 0)}
        variant="secondary"
        size="md"
      ></Button>
    </header>
  );
};

export default Header;
