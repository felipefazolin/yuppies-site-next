import Button from "@components/Button";

// Componente DivSliderContent
const SliderActionContent = ({ content, currentSlide, slideDirection }) => {
  return (
    <div className={`div-slider-content ${slideDirection} bg-0`}>
      <div className="content">
        <h2 className="div-slider-title mb-3 radius no-hyphen-break">
          {content[currentSlide].title}
        </h2>
        <h3 className="div-slider-subtitle mb-4 radius">
          {content[currentSlide].description}
        </h3>
        <Button
          label={content[currentSlide].button}
          bg={"button-bg-1"}
          link={content[currentSlide].link}
        />
      </div>
    </div>
  );
};

export default SliderActionContent;

// const DivSliderContent = ({ content, currentSlide }) => {
//   return (
//     <>
//       <h2 className="div-slider-title mb-4">{content[currentSlide].title}</h2>
//       <h3 className="div-slider-subtitle mb-4">{content[currentSlide].description}</h3>
//       <button className="btn btn-primary div-slider-button">
//         {content[currentSlide].button}
//       </button>
//     </>
//   );
// };

// export default DivSliderContent;
