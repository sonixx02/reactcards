import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftclickHandler() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  }

  function rightclickHandler() {
    if (index + 1 < reviews.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function supriseclickHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div>
      <Card reviews={reviews[index]}></Card>
      <div className="flex justify-center text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftclickHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightclickHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div >
        <button
          onClick={supriseclickHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
