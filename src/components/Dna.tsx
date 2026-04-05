const PortfolioVideo = () => {
  return (
    <div className="w-full bg-black p-6">
    
      <video
        className="w-full h-[300px] object-cover"
        autoPlay
        muted
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default PortfolioVideo;
