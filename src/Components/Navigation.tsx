import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/vietnam">Vietnam</NavLink>
          </li>
          <li>
            <NavLink to="/south-korea">South Korea</NavLink>
          </li>
          <li>
            <NavLink to="/singapore">Singapore</NavLink>
          </li>
          <li>
            <NavLink to="/javascript">JavaScript</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
