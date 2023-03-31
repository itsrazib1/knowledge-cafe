import React from "react";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container px-md-5">
          <div className="px-md-5">
            <a className="navbar-brand fs-2 fw-bolder" href="#">
              Programming Turner
            </a>
          </div>
          <div className="px-md-5">
            <div
              className="d-md-flex justify-content-md-end gap-3"
              id="navbarNav"
            >
              <div>
                <img
                className="rounded-5"
                  src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=649&q=80"
                  alt="razib"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container px-md-5 w-75">
        <hr />
      </div>
    </>
  );
};

export default Header;
