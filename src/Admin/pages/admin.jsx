import "../styles/admin.scss";
const Admin = () => {
  if (!window.localStorage.getItem("auth"))
    return alert("You have no authority to be on this page");

  return <div className="Navbar"></div>;
};

export default Admin;
