import React from "react";

interface Props {
  portfolioValue: string;
}

const CardPortfolio = ({ portfolioValue }: Props) => {
  return (
    <>
      <h4>{portfolioValue}</h4>
      <button>x</button>
    </>
  );
};

export default CardPortfolio;
