import React from 'react'
import spacexlogo from "./assets/spacex-logo.png";
import refresh from "./assets/icon/refresh.png";
export const Header = () => {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-white">
          <a class="navbar-brand" href="javascript:void(0)">
            <span class="d-flex align-items-center">
              <img src={spacexlogo} height="20" alt="" />
              <span class="">LAUNCHES</span>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a
                  class="nav-link btn btn-solid btn-top"
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
