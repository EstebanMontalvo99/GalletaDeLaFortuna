import React, { useState } from "react";

const QuoteBox = ({ quote }) => {
  return (
    <div className="box">
      <div className="miniBox">
        <p className="box__quote">{quote.phrase}</p>
        <h2 className="box__author">{quote.author}</h2>
        <i className="bx bxs-quote-alt-right"></i>
      </div>
    </div>
  );
};

export default QuoteBox;
