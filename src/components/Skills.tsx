import bio1 from "../assets/bio1.png";
import bio2 from "../assets/bio2.png";
import bio3 from "../assets/bio3.png";
import bio4 from "../assets/bio4.png";
import bio5 from "../assets/bio5.png";
import bio6 from "../assets/bio6.png";

function Skills() {
    const skills = [
        { name: "Molecular Biology (DNA, RNA, Proteins)", icon: bio1 },
        { name: "Pipetting", icon: bio2 },
        { name: "Solution Preparation", icon: bio3 },
        { name: "Sterile Techniques", icon: bio4 },
        { name: "Python Programming", icon: bio5 },
        { name: "Data Analysis", icon: bio6 },
    ];

    return (
        <section id="skills" className="bg-black text-white py-20">
            <div className="container mx-auto px-4" data-aos="zoom-in">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-blue-500 mb-2">
                        What I Do
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        I am a Bioinformatics enthusiast working on projects in
                        genomics, sequence analysis, and data-driven biological research.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center 
                                       bg-gray-900 rounded-xl p-4 shadow-lg 
                                       transform transition duration-300 
                                       hover:scale-110 
                                       hover:shadow-cyan-500/50
                                       bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 mb-4 object-contain 
                                           drop-shadow-[0_0_10px_#00ffff]"
                            />
                            <p className="text-white font-semibold text-center text-sm">
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;