import photo from "../assets/linkpho.png"
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center  overflow-hidden font-poppins text-white px-4 md:px-8 md:px-12 py-16 md:py-0 " style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/universe-is-science-science-technology_1034924-12749.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute w-24 h-24 md:w-40 md:h-40  w-1/4 max-w-[200px] aspect-square top-[10%] left-[5%] rounded-full bg-gradient-to-r from-cyan-400 to-purple-700 opacity-10 animate-bounce-slow"></div>
        <div className="absolute w-24 h-24 md:w-40 md:h-40  w-1/6 max-w-[150px] aspect-square top-[65%] right-[10%] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-10 animate-bounce-slow delay-200"></div>
        <div className="absolute w-24 h-24 md:w-40 md:h-40  w-1/8 max-w-[120px] aspect-square top-[25%] right-[8%] rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 animate-bounce-slow delay-400"></div>
        <div className="absolute w-24 h-24 md:w-40 md:h-40  w-1/10 max-w-[100px] h-[6rem] bottom-[30%] left-[40%] rounded-full bg-gradient-to-r from-pink-500 to-purple-700 opacity-10 animate-bounce-slow delay-600"></div>
      </div>
      <div className="relative z-10 flex-1 text-center md:text-left top-10 space-y-2">
        <div className="text-3xl md:text-5xl font-bold">
          <span >Hello I'm</span>
          <br />
          <span className="text-white">Goda Bharath</span>
        </div>

        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-600  bio1 animate__animated animate__bounceInLeft animate__slow ">
          Bioinfromatican Gene analysis <span>pharmacovigilance </span><span>SAS Developer</span>
        </h1>

        <p className="text-white max-w-full md:max-w-lg lg:max-w-xl">
          Transforming biological data into meaningful insights through bioinformatics, gene analysis, and data science. Passionate about bridging biology and technology to drive innovation in research and healthcare.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="
    px-6 py-3 rounded-full
    bg-gradient-to-r from-cyan-400 to-purple-700
    text-gray-100
    shadow-lg shadow-cyan-500/40
    transition-all duration-300 ease-in-out
    hover:scale-105
    hover:text-white
    hover:shadow-2xl hover:shadow-cyan-400/70
  "
          >
            <span className="text-black hover:text-white">View my work</span>
          </a>
          <a
            href="#contact"
            className="
      px-6 py-3 rounded-full 
      bg-pink-500 
      text-white 
      shadow-lg shadow-pink-500/40 
      transition-transform duration-300 ease-in-out
      hover:bg-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-400/70
    "
          >

            <span className="text-black hover:text-white">Get in touch</span>
          </a>

        </div>

      </div>
      <div className="relative z-10 flex-1 flex justify-center md:justify-center h-85 mt-20  md:mt-10 md:px-12 py-16 md:py-0 ">
        <img
          src={photo}
          alt="Hero"
          className="w-3/5 max-w-[400px] w-48 sm:w-64 md:w-80 lg:w-96 
              px-8 py-4 rounded-full relative overflow-hidden
              bg-gradient-to-r from-pink-700 via-rose-600 to-pink-100
              text-white font-semibold
              shadow-2xl shadow-pink-500/50
              transition-all duration-500 ease-out
              hover:scale-110 hover:shadow-3xl hover:shadow-pink-100/70
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:animate-shimmer before:opacity-0 hover:before:opacity-100
             animate__animated animate__fadeInRight md:max-w-[500px] lg:max-w-[600px] rounded-xl border-2 border-pink-500/40 shadow-lg shadow-pink-500/30 animate-fadeIn"
        />
        <div className="absolute  right-21 rounded-2xl bg-gradient-to-r h-88 w-115 animate-pulse  -z-10  border border-white/10
      shadow-[0_0_40px_rgba(168,85,247,0.6)]
      transition-all duration-500
      group-hover:scale-100
      group-hover:shadow-[0_0_60px_rgba(168,85,247,0.9)]"></div>
      </div>
    </section>
  );
}

export default Hero;
