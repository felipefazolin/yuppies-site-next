"use client";

// COMPONENTES
import GridText from "@components/GridText";
import Header from "@components/Header";

// CONTEÚDOS
import entregamos1 from "@contents/solucoes/seo/entregamos1.json";
import entregamos2 from "@contents/solucoes/seo/entregamos2.json";
import entregamos3 from "@contents/solucoes/seo/entregamos3.json";
import suporte from "@contents/solucoes/seo/suporte.json";
import header from "@contents/solucoes/seo/header.json";

import jsonSliderServices from "@contents/home/slider-services.json";


import theme from "@contents/theme.json";
import SliderAction from "@components/SliderAction";

const SlideShow = () => {
  return (
    <>
      <Header content={header} />
      <GridText content={entregamos1} theme={theme.light} />
      <GridText content={suporte} theme={theme.dark} />
      <GridText content={entregamos2} theme={theme.light} />
      <GridText content={entregamos3} theme={theme.light} />
      <SliderAction content={jsonSliderServices} />
    </>
  );
};

export default SlideShow;
