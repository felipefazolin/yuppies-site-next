"use client";
import CaseNumbersCounter from "@components/CaseNumbersCounter";

const CaseNumbersContent = ({ title, number, symbol, legend }) => {
  return (
    <>
      <div className="case-numbers-title">{title}</div>
      <div className="case-numbers">
        <div className="case-numbers-float">
          <CaseNumbersCounter endNumber={number} />
          {symbol}
        </div>
      </div>
      <div className="case-numbers-legend">{legend}</div>
    </>
  );
};

export default CaseNumbersContent;
