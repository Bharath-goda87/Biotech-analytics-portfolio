function Resume() {
  return (
    <section id="resume" className="w-full bg-black py-10 px-14 text-white" >
      {/* Title */}
      <div className="text-center mb-16" data-aos="zoom-in">
        <h1 className="text-5xl font-bold text-blue-500 mb-3">Resume</h1>
        <p className="text-gray-400">
          Download my resume or explore my skills 
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl p-22 text-center gap-4" data-aos="zoom-in">
        <div className="bg-[#171722]/70  rounded-2xl p-10 border border-white/10 shadow-xl flex flex-col items-center ">
          <h2 className="text-2xl font-semibold text-blue-400">
            Download Resume
          </h2>

          <p className="text-white mt-3 mb-8 max-w-xs">
            Get a detailed overview of my skills, and achievements.
          </p>

          {/* Gradient Download Button */}
          <a
            href="public/Goda Bharath_Medical_Simulation_Resume_pdf.pdf"
            className="text-center
        px-6 py-3 rounded-full 
        bg-blue-700 
        shadow-lg shadow-blue-500/50
        transition-all duration-300 ease-in-out
        hover:scale-110 
        hover:shadow-[0_0_20px_#0ea5e9] 
        hover:bg-gradient-to-r from-blue-500 to-indigo-600
      "
          >

            <span className="text-black hover:text-white">⬇ Download PDF</span>
          </a>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Resume;