"use client"
import { useEffect, useRef } from "react";

const HeaderHome = ({ content }) => {

  const videoRef = useRef(null);

  useEffect(() => {
    // Garante que o vídeo será carregado sempre que voltar para a home
    if (videoRef.current) {
      videoRef.current.load(); // Força o carregamento do vídeo
    }
  }, []);
  return (
    <div className="position-relative overflow-hidden height-custom  ">
      <div className="bg-absolute bg-2  "></div>
      {/* 
      XXS não tem breakpoint
      XS É MT-XS-20      
      */}
      <div className="container mb-5 mt-8 mt-xs-8 mt-sm-8 mb-sm-5 mt-md-9 mt-lg-10 mt-xl-10 mt-xxl-10 mb-lg-7 ">
        <div className="row">
          <div className="col-12 offset-0 col-sm-10 col-xl-8  col-xxl-6  offset-sm-1 offset-xl-2 offset-xxl-3  align-content-center text-center">
            <div className="p-0">
              <h1 className="header-home-title">
                soluções digitais integradas para seu negócio               
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container position-relative">
        <div className="row gx-5">
          <div className="col-12 offset-0 text-center position-relative">
            <video
              className="video"
              src="videos/video2.mp4"
              preload="auto"
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              alt="Video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
