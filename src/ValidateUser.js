import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Components/auth";
function ValidateUser({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}
export default ValidateUser;
