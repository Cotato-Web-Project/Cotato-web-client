import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" /> */}
            <i className="bi bi-cloud"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/postlist">
                  IT Issue
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Session
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Study
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Project
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar