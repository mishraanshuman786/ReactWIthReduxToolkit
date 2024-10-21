import React, { useState } from "react";
import { fakseUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser, deleteUsers } from "../store/slices/UserSlice";
import ShowData from "./ShowData";

const AddNewUser = () => {
  const dispatch = useDispatch();

  function addNewUser(payload) {
    console.log(payload);
    dispatch(addUser(payload));
  }

  function deleteAllUsers() {
    dispatch(deleteUsers());
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "#a29fa2", fontWeight: "lighter" }}>
          List Of User Details
        </h1>
        <div>
          <button
            style={{
              borderRadius: "4px",
              fontSize: "18px",
              color: "white",
              backgroundColor: "#0D47A1",
              border: "none",
              outline: "none",
              padding: "5px",
              marginRight: "10px",
            }}
            onClick={() => addNewUser(fakseUserData())}
          >
            Add New User
          </button>
          <button
            style={{
              borderRadius: "4px",
              fontSize: "18px",
              color: "white",
              backgroundColor: "red",
              border: "none",
              outline: "none",
              padding: "5px",
              marginLeft: "10px",
            }}
            onClick={() => deleteAllUsers()}
          >
            Delete All Users
          </button>
        </div>
      </div>
      <hr />
      <ShowData />
    </>
  );
};

export default AddNewUser;
