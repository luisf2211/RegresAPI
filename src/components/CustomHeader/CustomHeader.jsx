import React from "react";

function CustomHeader(props) {
  return (
    <>
      <nav
        className="navbar customHeader"
        style={{
          /* border: "1px solid red", */
          background: "#282C34",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{
              color: "white"
            }}
          >
            {props.title}
          </a>
        </div>
      </nav>
    </>
  );
}

export default CustomHeader;
