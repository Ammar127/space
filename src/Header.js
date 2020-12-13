import React from 'react'
import spacexlogo from "./assets/spacex-logo.png";
import refresh from "./assets/icon/refresh.png";
export const Header = (props) => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-white">
          <a className="navbar-brand" href="javascript:void(0)">
            <span className="d-flex align-items-center">
              <img src={spacexlogo} height="20" alt="" />
              <span className="">LAUNCHES</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  onClick={props.onReload}
                  className="nav-link btn btn-solid btn-top"
                  href="javascript:void(0)"
                >
                  Reload Data <img src={refresh} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}
