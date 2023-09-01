import { Link, useLocation } from "react-router-dom";

function AppBreadCrumbs() {
  const location = useLocation();
  let crubLink = "";

  const crumbpath = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((crumb) => {
      crubLink += `/${crumb}`;
      return (
        <Link to={crubLink} key={crumb}>
          {crumb}
        </Link>
      );
    });
  return <div>crumbpath</div>;
}
export default AppBreadCrumbs;
