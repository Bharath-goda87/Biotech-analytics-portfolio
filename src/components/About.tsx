import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  description: string;
  index: string;
}
const cards: CardData[] = [
  {
    title: "Bioinformatics Expertise",
    description: "Bioinformatics & Biotechnology graduate specializing in gene analysis, molecular biology, and computational data interpretation. Transforming complex biological data into actionable insights.",
    index: "6/6",
  },
  {
    title: "Genomic Data Analysis",
    description: "Expertise in genomic data interpretation, biological data analysis, and applying computational methods to solve real-world scientific challenges in research and healthcare.",
    index: "5/6",
  },
  {
    title: "Python Programming",
    description: "Proficient in Python programming for bioinformatics applications. Skilled in data processing, analysis pipelines, and developing structured solutions for biological datasets.",
    index: "4/6",
  },
  {
    title: "Molecular Biology",
    description: "Strong foundation in molecular biology concepts with hands-on experience in gene analysis, data interpretation, and research methodology for biotechnology applications.",
    index: "3/6",
  },
  {
    title: "Analytical Problem Solving",
    description: "Data-driven approach focusing on accuracy, precision, and reliability. Delivering structured analytical solutions to complex scientific challenges through rigorous methodologies.",
    index: "2/6",
  },
  {
    title: "Research & Innovation",
    description: "Passionate about healthcare advancements and research-driven projects. Seeking Bioinformatics, Biotechnology, and Data Analysis roles to contribute to interdisciplinary teams.",
    index: "1/6",
  },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight =
        containerRef.current.offsetHeight - window.innerHeight;

      if (totalHeight <= 0) return;

      const scrolled = -rect.top;
      const value = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef} id="about"
      className="relative bg-black text-orange-400"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Heading Section */}
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          What I <span className="text-cyan-400">Bring</span>
        </h2>
      </motion.div>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {cards.map((card, index) => {
          const cardProgress = progress * cards.length - index;

          const isPast = cardProgress > 1;

          const translateY = isPast
            ? -400
            : index * 20 - progress * cards.length * 20;

          const scale = isPast
            ? 0.9
            : 1 - Math.max(0, index - progress * cards.length) * 0.05;

          const opacity = isPast ? 0 : 1;

          return (
            <div
              key={card.title}
              className="absolute w-[850px] h-[380px] rounded-3xl  bg-white p-8 shadow-2xl transition-all duration-700"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
                zIndex: cards.length - index,
              }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-black leading-relaxed">
                {card.description}
              </p>
              <p className="absolute bottom-6 right-8 text-xs text-gray-400 font-mono">
                {card.index}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;
