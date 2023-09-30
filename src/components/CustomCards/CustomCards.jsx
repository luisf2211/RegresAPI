import React from "react";

function CustomCards(props) {
  return (
    <>
      <div>
        <div className="col" >
          <div
            className="card"
            style={{
              margin: 'auto',
              maxWidth: "300px",
              maxHeight: "420px",
              background: "#5E687E",
              color: "white",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <img
              src={props.avatar}
              style={{ width: "100%", height: "220px" }}
              className="card-img-top"
              alt="userimage"
            />
            <div className="card-body">
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomCards;
