"use client";

// COMPONENTES
import GridText from "@components/GridText";
import Header from "@components/Header";
import CtaAction from "@components/CtaAction";

// CONTEÚDOS
import header from "@contents/solucoes/branding/header.json";
import entregamos from "@contents/solucoes/branding/entregamos.json";
import suporte from "@contents/solucoes/branding/suporte.json";
import cta from "@contents/solucoes/branding/cta.json";
import jsonSliderServices from "@contents/home/slider-services.json";

import formBranding from "@contents/solucoes/branding/form.json";

import theme from "@contents/theme.json";
import Form from "@components/Form";
import SliderAction from "@src/components/SliderAction";

const SlideShow = () => {
  return (
    <>
      <Header content={header} />
     
      <GridText content={entregamos} theme={theme.light} />
      <CtaAction content={cta} button={'hide'}/>
      <GridText content={suporte} theme={theme.dark} />
      <Form content={formBranding} />
    
    </>
  );
};

export default SlideShow;
