const CaseVideo = ({ content }) => {
  return (
    <>
      <div className="pt-9 pb-9">
        <div className="container">
          <div className="row gx-5 mt-5">
            <div className="col-12 offset-0">
              <video
                className="cases-video"
                src="/videos/cases-spetialist-4k-com-zoom.mp4"
                preload="auto"
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
    </>
  );
};

export default CaseVideo;
