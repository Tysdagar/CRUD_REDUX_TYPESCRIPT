import { useState } from "react";
import { type UserType, type UserErrors } from "../types";
import { INITIAL_STATE_USER, SUPPORTED_ROLES } from "../../constants";
import { Button, Text } from "@tremor/react";
import { useActions } from "../hooks/useActions";

interface Props {
  closeModal: () => void;
}

const CreateUser = ({ closeModal }: Props) => {
  const [userForm, SetUserForm] = useState<UserType>(INITIAL_STATE_USER);
  const { addNewUser, usersSaved } = useActions();
  const [errors, setErrors] = useState<UserErrors>({
    usernameError: "",
    emailError: "",
    phoneError: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    SetUserForm((prevUserForm) => ({
      ...prevUserForm,
      [name]: value,
    }));
  }

  function validateUser(userForm: UserType) {
    const { username, email, phone } = userForm;

    const numberPhone = typeof phone === "string" && parseInt(phone);

    let newErrors: UserErrors = {
      usernameError: "",
      emailError: "",
      phoneError: "",
    };

    if (!username) {
      newErrors.usernameError = "Username is required";
    } else if (username.length < 5) {
      newErrors.usernameError = "Username must have at least 5 characters";
    } else if (username.length > 30) {
      newErrors.usernameError =
        "Username is too long, must have no more than 10 characters";
    }

    if (!email) {
      newErrors.emailError = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.emailError = "This field should be an email";
    }

    if (!numberPhone) {
      newErrors.phoneError = "Phone is required";
    } else if (typeof numberPhone !== "number") {
      newErrors.phoneError = "Phone must be a number";
    } else if (numberPhone.toString().length < 10) {
      newErrors.phoneError =
        "Phone number is too short, it must have at least 10 digits";
    } else if (numberPhone.toString().length > 10) {
      newErrors.phoneError =
        "Phone number is too long, it must have at most 10 digits";
    }

    if (
      Object.keys(newErrors).every(
        (key) => newErrors[key as keyof UserErrors] === ""
      )
    ) {
      return {
        isValid: true,
      };
    } else {
      return {
        isValid: false,
        errors: newErrors,
      };
    }
  }

  function dispatchUser(event: React.ChangeEvent<HTMLDivElement>) {
    event.preventDefault();

    const validation = validateUser(userForm);

    if (validation.isValid === false) {
      setErrors(validation.errors as UserErrors);
    } else {
      addNewUser({ ...userForm, id: usersSaved.length + 1 });

      closeModal();
    }
  }

  return (
    <div className="create-user-form p-4" onSubmit={dispatchUser}>
      <h2 className="text-2xl font-semibold mb-4">Create User</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring border-blue-500"
            onChange={handleChange}
          />
          {errors?.usernameError && (
            <Text className="mt-2" color="red">
              {errors.usernameError}
            </Text>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring border-blue-500"
            onChange={handleChange}
          />
          {errors?.emailError && (
            <Text className="mt-2" color="red">
              {errors.emailError}
            </Text>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600 mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userForm.phone}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring border-blue-500"
            onChange={handleChange}
          />
          {errors?.phoneError && (
            <Text className="mt-2" color="red">
              {errors.phoneError}
            </Text>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-600 mb-2">
            Role:
          </label>
          <select
            id="role"
            name="role"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring border-blue-500"
            onChange={handleChange}
            value={userForm.role}
          >
            {Object.entries(SUPPORTED_ROLES).map(([key, literal]) => {
              return (
                <option value={key} key={key}>
                  {literal}
                </option>
              );
            })}
          </select>
        </div>

        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-5"
        >
          Create
        </Button>
        <Button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={closeModal}
        >
          Cerrar
        </Button>
      </form>
    </div>
  );
};

export default CreateUser;
