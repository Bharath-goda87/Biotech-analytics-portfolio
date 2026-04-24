import { useState, useEffect } from "react";
import bio11 from "../assets/bio11.png";
import bio12 from "../assets/bio12.png";
import bio13 from "../assets/bio13.png";
import bio14 from "../assets/bio14.png";
import bio15 from "../assets/bio15.png";
import bio16 from "../assets/bio16.png";

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const images = [bio11, bio12, bio13, bio16, bio14, bio15,];
  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="w-full bg-black text-white px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE – Carousel */}
        <div className="relative w-full">
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === current ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-justify">
          <h2
            className="relative text-4xl font-extrabold text-center 
    bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 
    bg-clip-text text-transparent 
    animate-pulse"
          >
            BioAsia 2026 Experience
          </h2>

          <p className="text-white leading-relaxed">
            I attended BioAsia 2026, one of the leading biotechnology and life
            sciences conferences in Hyderabad, where global biotech,
            pharmaceutical, healthcare, and bioinformatics organizations gathered
            to discuss innovations shaping the future of medicine and technology.
          </p>

          <p className="text-white">
            During the event, I interacted with pharma leaders and biotech
            professionals from organizations such as{" "}
            <a
              href="https://www.amgen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Amgen
            </a>,{" "}
            <a
              href="https://www.sanofi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Sanofi
            </a>,{" "}
            <a
              href="https://www.novartis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Novartis
            </a>,{" "}
            <a
              href="https://www.drreddys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Dr. Reddy’s Laboratories
            </a>,{" "}
            <a
              href="https://www.aurobindo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Aurobindo Pharma
            </a>,{" "}
            <a
              href="https://www.msd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full">
              MSD
            </a>,{" "}
            <a
              href="https://www.sailife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Sai Life Sciences
            </a>,{" "}
            <a
              href="https://www.argenx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              argenx
            </a>, and{" "}
            <a
              href="https://www.lilly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-semibold relative
           transition-colors duration-300
           hover:text-orange-300
           after:content-['']
           after:absolute
           after:left-0
           after:-bottom-1
           after:w-0
           after:h-[2px]
           after:bg-orange-400
           after:transition-all
           after:duration-300
           hover:after:w-full"
            >
              Eli Lilly
            </a>.
          </p>

          <p className="text-white leading-relaxed">
            A key takeaway from the conference was understanding how biology and
            data analytics work together in modern healthcare ecosystems. The
            discussions highlighted how genomics, biomarker discovery, clinical
            data analytics, AI-assisted drug discovery, and regulatory
            technologies are transforming how therapies are developed, validated,
            and delivered to patients.
          </p>

          <div className="bg-white/5 p-6 rounded-xl border border-orange-400/20">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Key Learnings
            </h3>
            <ul className="list-disc list-inside text-white space-y-3">
              <li>How genomic and transcriptomic data support precision medicine</li>
              <li>The role of bioinformatics in target identification and biomarker validation</li>
              <li>AI and machine learning applications in drug discovery pipelines</li>
              <li>Clinical data management, safety monitoring, and regulatory workflows</li>
              <li>How biotech and pharma companies operationalize biology + data at scale</li>
            </ul>
          </div>

          <p className="text-white leading-relaxed">
            This experience strengthened my interest in bioinformatics and
            data-driven biotechnology, and reinforced my goal of contributing to
            research-focused and analytics-driven pharmaceutical projects. It also
            helped me clearly understand how academic knowledge in molecular
            biology and computational analysis translates into real-world
            industry-scale applications.
          </p>
        </div>
      </div>
    </div>

  );
};

export default Carousel;
