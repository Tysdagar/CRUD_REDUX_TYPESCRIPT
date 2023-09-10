import { useEffect } from "react"
import { Users } from "../../constants";
import { useActions } from "./useActions";

export function useUsers() {

    const { setListOfUsers, usersSaved } = useActions()

    useEffect(() => {
        setTimeout(() => {
            setListOfUsers(Users);
        }, 1000);
    }, []);

    return { usersSaved }

}