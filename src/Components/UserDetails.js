import { useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  return <div>UserDetails {params.id}</div>;
}
export default UserDetails;
