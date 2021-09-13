import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Review = ({ item, handleClick }) => {
  return (
    <>
      <section key={item.id} className='review'>
        <h3>{item.name}</h3>
        <h4>{item.job}</h4>
        <img src={item.image} alt={item.name} />
        <p>{item.text}</p>
        <button
          className='btn'
          onClick={() => handleClick(item.id, false, true)}
        >
          <FaChevronLeft />
        </button>
        <button
          className='btn'
          onClick={() => handleClick(item.id, true, false)}
        >
          <FaChevronRight />
        </button>{" "}
        <br />
        <br />
        <button onClick={() => handleClick(item.id)}>Surprize Me</button>
      </section>
    </>
  );
};

export default Review;
