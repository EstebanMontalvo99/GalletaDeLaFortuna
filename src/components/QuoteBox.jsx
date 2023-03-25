import React, { useState } from "react";
import ButtonBox from "./ButtonBox";

const QuoteBox = ({ quote }) => {
  return (
    <div className="box">
      <p className="box__quote">{quote.quote}</p>
      <h2 className="box__author">{quote.author}</h2>
      <i className="bx bxs-quote-alt-right"></i>
    </div>
  );
};

export default QuoteBox;
