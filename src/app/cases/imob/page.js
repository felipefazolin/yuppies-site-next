//JSON

//COMPONENTS
import CaseMoreInfo from "@components/CaseMoreInfo";
import CaseHeader from "@components/CaseHeader";
import CaseDetails from "@components/CaseDetails";
import CaseVideo from "@components/CaseVideo";
import CaseOverlayGrid from "@components/CaseOverlayGrid";
import CaseOverlayGridTwoColumns from "@components/CaseOverlayGridTwoColumns";
import CaseNewHeader from "@components/CaseNewHeader";
import CaseGridCta from "@components/CaseGridCta";
import CaseGridText from "@components/CaseGridText";
import CaseNumbers from "@components/CaseNumbers";
import Header from "@components/Header";

import HeaderImob from "@contents/cases/imob/header.json";
import HeaderInternal from "@components/HeaderInternal";

const moreInfo1 = {
  title: "Título 1 Loren",
  text: [
    "Com a nossa atuação na área de desenvolvimento da imobiliária geramos um aumento da percepção da marca e aumentamos os leads em 65% no primeiro ano",
    "Atuação na área de desenvolvimento da imobiliária geramos um aumento da percepção da marca e aumentamos os leads em 65% no primeiro ano",
  ],
};

const moreInfo2 = {
  title: "Título 2 Loren",
  text: [
    "Com a nossa atuação na área de desenvolvimento da imobiliária geramos um aumento da percepção da marca e aumentamos os leads em 65% no primeiro ano",
    "Atuação na área de desenvolvimento da imobiliária geramos um aumento da percepção da marca e aumentamos os leads em 65% no primeiro ano",
  ],
};

const caseNumbers = [
  { title: "Título 1", number: "200", legend: "Legenda 1", symbol: "%" },
  { title: "Título 2", number: "50", legend: "Legenda 2", symbol: "%" },
  { title: "Título 3", number: "3", legend: "Legenda 3", symbol: "%" },
];

export default function ProjetoPage() {
  return (
    <>
    
      <CaseHeader />
      <CaseGridText />
      <CaseNumbers />
      <CaseGridCta /> 
      <HeaderInternal content={HeaderImob} />     
      <CaseNewHeader />
      <CaseMoreInfo content={moreInfo1} />
      <CaseDetails />
      <CaseVideo />
      <CaseOverlayGrid />
      <CaseMoreInfo content={moreInfo2} />
      <CaseOverlayGridTwoColumns />
    </>
  );
}
