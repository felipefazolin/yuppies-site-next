"use client";
import CaseNumbersContent from "./CaseNumbersContent";

const CaseNumbers = ({ content }) => {
  return (
    <div className="pt-9 pb-9 case-numbers-bg">
      <div className="container">
        <div className="row gx-5">
          <div className="col-4">
            <div className="p-0 bg-2">
              <CaseNumbersContent
                title={"Título"}
                number={200}
                symbol={"%"}
                legend={"legend"}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="p-0 bg-2">
              <CaseNumbersContent
                title={"Título"}
                number={3}
                symbol={"%"}
                legend={"legend"}
              />
            </div>
          </div>
          <div className="col-4">
            <div className="p-0 bg-2">
              <CaseNumbersContent
                title={"Título"}
                number={50}
                symbol={"%"}
                legend={"legend"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseNumbers;
