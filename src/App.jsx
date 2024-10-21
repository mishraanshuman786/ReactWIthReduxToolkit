import React from "react";
import Navbar from "./components/Navbar";
import AddNewUser from "./components/AddNewUser";

const App = () => {
  return (
    <div>
      <div style={{ width: "60%", margin: "auto" }}>
        <Navbar />
        <AddNewUser />
      </div>
    </div>
  );
};

export default App;
