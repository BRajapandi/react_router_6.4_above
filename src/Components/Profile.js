import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  const navicate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navicate("/login");
  };
  return (
    <>
      <div>Profile {auth.user && "HI Raj"}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
export default Profile;
