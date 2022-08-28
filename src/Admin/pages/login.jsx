import { useNavigate } from "react-router-dom";

const Admin = ({ setToken }) => {
  const nav = useNavigate();
  const validateLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3200/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: e.target.username.value,
        pass: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((token) => {
        window.localStorage.setItem("auth", token);
        nav("/fanta/home");
      })
      .catch((err) => {
        if (err) throw err;
      });
  };
  return (
    <form onSubmit={(e) => validateLogin(e)}>
      This is admin login form
      <input name="username" />
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
};

export default Admin;
