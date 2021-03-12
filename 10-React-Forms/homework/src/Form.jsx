import React from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) errors.username = "Username is required";
  else if (!/\S+@\S+\.\S+/.test(input.username))
    errors.username = "Username is invalid";

  if (!input.password) errors.password = "Password is required";
  else if (!/(?=.*[0-9])/.test(input.password))
    errors.password = "Password is invalid";

  return errors;
}

export default function Form() {
  const [input, setInput] = React.useState({ username: "", password: "" });
  const [errors, setErrors] = React.useState({});

  function handleInput(evento) {
    setInput({ ...input, [evento.target.name]: evento.target.value });
    setErrors(
      validate({
        ...input,
        [evento.target.name]: evento.target.value,
      })
    );
  }

  return (
    <form>
      <label htmlFor="user" style={{ display: "block", marginBottom: "4px" }}>
        Username:
      </label>
      <input
        className={`${errors.username && "danger"}`}
        style={{ marginBottom: "4px" }}
        type="text"
        id="user"
        name="username"
        value={input.username}
        onChange={handleInput}
      />
      {errors.username && (
        <p className="danger" style={{ marginBottom: "8px" }}>
          {errors.username}
        </p>
      )}
      <label htmlFor="pass" style={{ display: "block", marginBottom: "4px" }}>
        Password:
      </label>
      <input
        className={`${errors.password && "danger"}`}
        style={{ marginBottom: "4px" }}
        type="password"
        id="pass"
        name="password"
        value={input.password}
        onChange={handleInput}
      />
      {errors.password && (
        <p className="danger" style={{ marginBottom: "8px" }}>
          {errors.password}
        </p>
      )}
      <input type="submit" style={{ display: "block" }} />
    </form>
  );
}
