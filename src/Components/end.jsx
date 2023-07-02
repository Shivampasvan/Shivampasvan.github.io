import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsArrowUpSquare } from "react-icons/bs";
const End = () => {
  return (
    <>
      <section className="end">
        <div className="last" style={{ display: "flex" }}>
          <span>
            <AiOutlineCopyrightCircle color="#781c9f" />
          </span>
          <p>Created by Shivam Pasvan All Rights Reserved.</p>
        </div>
        <div className="top">
          <a href="#home">
            <BsArrowUpSquare style={{ color: "#781c9f" }} />
          </a>
        </div>
      </section>
    </>
  );
};

export default End;
