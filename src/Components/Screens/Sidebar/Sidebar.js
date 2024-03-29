import { Link } from "react-router-dom";

const Sidebar = () => {
  const AdminLTELogo = require("../../../Assets/img/AdminLTELogo.png");
  const user2 = require("../../../Assets/img/user2-160x160.jpg");
  console.log("sidebar called");
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to={"/project/start-project"} className="brand-link">
        <img
          // src="public/dist/img/AdminLTELogo.png"
          src={AdminLTELogo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-bold">Audio Dashboard</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={user2} className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <a className="d-block">Project Name</a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon className
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-file" />
                <p>
                  Project
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link
                    to={"/project/start-project"}
                    className="nav-link"
                    data-toggle="modal"
                    data-target="#start-project"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Start Project</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project/addFileToProject"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>File</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project/workspace"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Workspace</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project/experiment"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Experiments</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project/serving"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Serving</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/project/setting"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Settings</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-database"></i>
                <p>
                  Datasets
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"/data-set/general"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>General</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="pages/layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Queries</p>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/data-set/commit"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Commits</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/data-set/info"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Info</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/data-set/setting"} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Settings</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Dashboard
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/container/registry"} className="nav-link">
                <i className="nav-icon fas fa-archive" />
                <p>Containers</p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-list-alt" />
                <p>
                  Compute
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"/compute/template"} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Templates</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/compute/resource"} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Resources</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/compute/storage"} className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Storage</p>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to={"/team/all-teams"} className="nav-link">
                <i className="nav-icon fas fa-archive" />
                <p>Team</p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="nav-icon fas fa-cogs" />
                <p>
                  Settings
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Top Navigation</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
