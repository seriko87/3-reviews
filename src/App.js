import React, { useState } from "react";
import Review from "./Review";
import reviews from "./data";

function App() {
  const [people, setPeople] = useState(reviews[0]);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const handleClick = (id, next, prev) => {
    if (next) {
      id = checkNumber(id);
      setPeople(reviews[id]);
    } else if (prev) {
      id = checkNumber(id);
      setPeople(reviews[id]);
    } else {
      let random = Math.floor(Math.random() * reviews.length);
      if (id === reviews[random].id) {
        random = random + 1;
        random = checkNumber(random);
        setPeople(reviews[random]);
      } else {
        random = checkNumber(random);
        setPeople(reviews[random]);
      }
    }
  };

  return (
    <div className='container'>
      <h1>Our Reviews</h1>
      <Review item={people} handleClick={handleClick} />
    </div>
  );
}

export default App;
