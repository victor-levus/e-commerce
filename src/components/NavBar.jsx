import React from "react";
import AppLogo from "../assert/AppLogo";

const NavBar = ({ categories = [], onClick }) => {
  return (
    <div className="navbar--container p-bg">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <AppLogo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div className="nav-link dropdown">
                <span
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </span>
                <ul className="dropdown-menu">
                  {categories.map((c) => (
                    <li
                      //   onClick={(e) => onClick(e)}

                      className="cursor-p"
                      key={c}
                    >
                      <a
                        href={`/products/categories/${c}`}
                        className="dropdown-item py-3"
                      >
                        {c.toUpperCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <a className="nav-link" href="#">
                Category
              </a> */}
              <a className="nav-link" href="#">
                {/* Category */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
