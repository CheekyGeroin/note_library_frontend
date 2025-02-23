import { useState } from "react";
import SubmitBtn from "../SubmitButton/SubmitBtn";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";

const LoginForm = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setEmail(" ");
    setPassword(" ");
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));

    reset();
  };
  return (
    <form onSubmit={submitHandler}>
      <ul>
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
      </ul>
      <SubmitBtn />
    </form>
  );
};

export default LoginForm;
