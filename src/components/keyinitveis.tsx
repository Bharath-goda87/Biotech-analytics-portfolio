import React from "react";
import bio7 from "../assets/bio7.jpeg";
import bio8 from "../assets/bio8.png";
import bio9 from "../assets/bio9.png";
import bio10 from "../assets/bio10.png";
import bio19 from "../assets/bio19.png";
import bio20 from "../assets/bio20.png";

interface Initiative {
  image: string;
  title: string;
  description: string;
  icon?: string;
}

const initiatives: Initiative[] = [
  {
    title: "India Pharma Expo 2026 & NextGen Innovation Expo",
    image: bio20,
    description: `I attended India Pharma Expo 2026 and the NextGen Innovation Expo, where I explored emerging trends in pharmaceuticals, biotechnology, and AI-driven healthcare innovation. The expo provided exposure to how drugs move through stages of discovery, development, formulation, manufacturing, and quality processes. I observed how artificial intelligence is being integrated into biopharma for drug discovery, predictive analytics, automation, data-driven decision making, and personalized medicine applications.

    Through industry exhibits, technical discussions, and innovation showcases, I gained practical understanding of pharmaceutical technologies, digital transformation in life sciences, and how computational tools are supporting modern bio-pharma workflows. This experience helped me connect my interests in biotechnology, Python, data analysis, and bioinformatics with real-world industry applications.

   Key takeaways included learning about AI integration in drug development, innovation in formulation and therapeutics, emerging opportunities in bioinformatics and digital health, and the importance of interdisciplinary skills in the future of life sciences. This expo broadened my industry awareness and strengthened my motivation to pursue roles in bioinformatics, biotechnology, computational biology, and data-driven healthcare`,
    icon: "🧪",
  },
  {
    title: "Bioinformatics workshop",
    image: bio7,
    description: `I attended a Bioinformatics workshop focused on applying computational and statistical approaches to real-world biological data analysis. The session covered core concepts such as gene expression analysis, data preprocessing, variability assessment, and study design, with hands-on practice using RStudio and Python. I gained practical exposure to publication-oriented statistical workflows, data visualization, and reproducible research practices, highlighting how robust analytical design supports high-impact biomedical and biotechnology research. This experience strengthened my ability to combine life science knowledge with computational tools, preparing me for roles in bioinformatics, biotechnology, pharmacovigilance, and data-driven life sciences.`,
    icon: "🏆",
  },
  {
    title: "Volunteering & Campus Activities",
    image: bio9,
    description: ` I had opportunity to volunteer at events organized by Microsoft Office in collaboration with the Microsoft AI life sciences Innovation Hub.

Assisted with event coordination and execution during technical and interactive sessions.

Supported help desk operations, handling participant queries and basic issue resolution.

Helped clarify general doubts related to event activities and tools used during the sessions.

Assisted in conducting engagement activities, including quizzes and participant interactions.

Worked with the event team, gaining experience in team coordination, communication, and responsibility.`
    ,
    icon: "🤝",
  },
  {
    title: "Mock Interview Experience",
    image: bio8,
    description:
      `I had the opportunity to participate in a mock interview organized by Vivekananda Degree College as part of our Campus Recruitment Training (CRT). The session provided practical exposure to real-world interview scenarios and valuable feedback from trainers and panel members.

Key Learnings:

Presenting myself with confidence and maintaining positive body language

Communicating thoughts clearly and effectively

Staying calm and thinking before answering under pressure

Understanding interview expectations and evaluation criteria

Structuring answers for clarity and handling questions confidently

This experience provided practical insights into the interview process and helped improve my confidence and preparedness for future opportunities.`,
    icon: "🗣",
  },
  {
    title: "Communication & Peer Guidance",
    image: bio10,
    description:
      `First Time Speaking on Stage — College Seminar Experience:     

    I had the opportunity to speak on stage for the first time at a college seminar. This experience was a valuable lesson in stepping out of my comfort zone, managing stage anxiety, and developing confidence.

During the Q&A session, I asked a common interview question:

“Why should we hire you?”

The response highlighted the importance of aligning:

Skills

Values

Mindset

What companies truly look for in candidates

Key Learnings:

Improved public speaking and communication skills

Gained a deeper understanding of interview expectations

Developed confidence to ask meaningful, career-oriented questions

Benefited from interactions with mentors and professionals`,
    icon: "💬",
  },
  {
    title: " 💊 Pharmacovigilance Learning Context (Biotecnika Webinar)",
    image: bio19,
    description: `This session highlighted how pharmacovigilance plays a key role in ensuring patient safety, regulatory compliance, and post-marketing drug monitoring across global markets.

Key learnings applied in this project include:
- Understanding the role of pharmacovigilance in pharma & biotech industries
- Real-world workflow of Individual Case Safety Report (ICSR) processing
- Introduction to Argus Safety Database for case entry and management
- Importance of accurate case reporting and regulatory timelines
- Role of MedDRA coding in standardizing adverse event data
- Signal detection and risk-benefit evaluation concepts

This project reflects practical understanding of pharmacovigilance operations and demonstrates how theoretical knowledge can be applied to real-world case processing scenarios.`,
  },
];

const InitiativesSection: React.FC = () => {
  return (
    <section
      id="keyinitiatives"
      className="px-6 md:px-10 bg-black text-white py-20"
    >
      <h2 className="text-3xl font-bold mb-10 text-blue-500 text-center" data-aos="zoom-in">
        My Initiatives
      </h2>

      <div className="grid gap-8 md:grid-cols-2" data-aos="zoom-in">
        {initiatives.map((initiative, index) => (
          <div
            key={index}
            className="
              group bg-gray-900 rounded-xl overflow-hidden shadow-lg
              transform transition duration-500 hover:scale-105
              hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-indigo-600
              hover:shadow-[0_0_15px_#00ffff]
            "
          >
            {/* Image */}
            <img
              src={initiative.image}
              alt={initiative.title}
              className="h-82 w-198 object-cover "
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-white">
                <span>{initiative.icon}</span>
                {initiative.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white text-start transition-colors duration-300">
                {initiative.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InitiativesSection;
