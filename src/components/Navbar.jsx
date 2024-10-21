import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "gray",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>ADMIN TABLE</h1>
      <p>One Destination for Complete Web Development</p>
      <nav style={{ width: "100%" }}>
        <ul
          style={{
            display: "flex",
            margin: "0px",
            justifyContent: "space-evenly",
            alignItems: "center",
            listStyleType: "none",
            height: "40px",
            backgroundColor: "#efeeef",
          }}
        >
          <li style={{ fontSize: "20px" }}>HOME</li>
          <li style={{ fontSize: "20px" }}>ABOUT</li>
          <li style={{ fontSize: "20px" }}>PROJECTS</li>
          <li style={{ fontSize: "20px" }}>CODE</li>
          <li style={{ fontSize: "20px" }}>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
