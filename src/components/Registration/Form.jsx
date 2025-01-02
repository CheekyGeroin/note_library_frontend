import { useState } from "react";
import { toast } from "react-toastify";
import SubmitBtn from "../SubmitButton/SubmitBtn";
import auth from "../../services/authAPI";

const RegisterForm = () => {
  const [username, setUsername] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPass, setConfirmPass] = useState(" ");

  const changeHandler = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPass":
        setConfirmPass(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setConfirmPass(" ");
    setEmail(" ");
    setPassword(" ");
    setUsername(" ");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("Passwords do not match!");
      setPassword(" ");
      setConfirmPass(" ");
    }
    const newUser = {
      username,
      email,
      password,
    };

    auth.registration(newUser);

    reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={changeHandler}
            />
          </label>
        </li>
        <li>
          <label>
            E-mail
            <input
              type="text"
              name="email"
              value={email}
              onChange={changeHandler}
            />
          </label>
        </li>
        <li>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={changeHandler}
            />
          </label>
        </li>
        <li>
          <label>
            Confirm password
            <input
              type="password"
              name="confirmPass"
              value={confirmPass}
              onChange={changeHandler}
            />
          </label>
        </li>
      </ul>
      <SubmitBtn />
    </form>
  );
};

export default RegisterForm;
