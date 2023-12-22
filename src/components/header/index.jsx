import { Link, React, useDispatch, useSelector, useState } from "components";
import { selectorUtility, utilityAction } from "reduxStore";

const Header = () => {
  const dispatch = useDispatch();
  const menuSidebarCollapsed = useSelector(
    selectorUtility.menuSidebarCollapsed
  );
  const handleToggleMenuSidebar = () => {
    dispatch(utilityAction.toggleSidebarMenu(!menuSidebarCollapsed));
  };
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const logout = () => {
    dispatch(
      utilityAction.setLoading({
        content: true
      })
    );
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "/";
      dispatch(utilityAction.stopLoading());
    }, 300);
  };
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={handleToggleMenuSidebar}
            data-widget="pushmenu"
            aria-label="Menu Hide Bar"
            role="button"
          >
            <i className="fas fa-bars" />
          </span>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className="nav-item dropdown" onMouseEnter={toggleMenu}>
            <Link to="#" className="nav-link dropdown-toggle user-action">
              <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ADefault_pfp.svg&psig=AOvVaw1Uo6uyzL5fLvK_RQACSWyx&ust=1703311377795000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjBu8evooMDFQAAAAAdAAAAABAD"
                className="avatarProfile"
                alt="Avatar"
              />{" "}
              <b className="caret"></b>
            </Link>
            <div
              className={`dropdown-menu ${menu ? "show" : ""}`}
              onMouseLeave={() => setMenu(false)}
            >
              <button type="button" className="dropdown-item">
                <i className="fa fa-user"></i> Profile
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => logout()}
              >
                <i className="nav-icon fas fa-arrow-right-from-bracket"></i>{" "}
                Logout
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
