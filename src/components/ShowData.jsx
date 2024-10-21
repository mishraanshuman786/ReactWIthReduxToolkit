import React from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const ShowData = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });
  console.log("data:", data);

  function deleteName(payload) {
    dispatch(removeUser(payload));
    console.log("after removing the data is:", data);
  }
  return (
    <ul
      style={{
        listStyleType: "none",
        fontSize: "20px",
        color: "gray",
        margin: "auto",
        padding: "0px",
      }}
    >
      {data.length > 0
        ? data.map((user, index) => {
            return (
              <li
                key={index}
                style={{
                  borderBottom: "2px solid gray",
                  paddingInline: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>{user}</div>
                <div>
                  <MdDelete
                    size="25px"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteName(index)}
                  />
                </div>
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default ShowData;
