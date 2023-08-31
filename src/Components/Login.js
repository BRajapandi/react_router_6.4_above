import { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleLogin = () => {
    auth.login();
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <div>Login Component</div>
      <button onClick={handleLogin}>Login User</button>
    </div>
  );
}
export default Login;
