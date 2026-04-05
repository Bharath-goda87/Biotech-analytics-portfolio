import bio1 from "../assets/bio1.png";
import bio2 from "../assets/bio2.png";
import bio3 from "../assets/bio3.png";
import bio4 from "../assets/bio4.png";
import bio5 from "../assets/bio5.png";
import bio6 from "../assets/bio6.png";


function Skills() {
    const skills = [
        { name: "Molecular biology (DNA, RNA, proteins)", icon: bio1 },
        { name: "Pipetting", icon: bio2 },
        { name: "Solution preparation", icon:bio3 },
        { name: "Sterile techniques", icon: bio4 },
        { name: "PYTHON", icon: bio5 },
        { name: "Data Analysis", icon:bio6 },
]

    return (
        <section id="skills" className="bg-black text-white py-20">
            <div className="container mx-auto px-4" data-aos="zoom-in">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-blue-500 mb-2">What I do</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        I am a Bioinfromatics designer and currently working on projects in bioinformatics and data analysis.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-2 gap-10">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center 
                                       bg-gray-900 rounded-lg p-2 shadow-lg 
                                       transform transition duration-500 
                                       hover:scale-110 drop-shadow-[0_0_8px_#00ffff] 
                                       bg-gradient-to-r bg:from-purple-500 hover:via-pink-500 hover:to-indigo-500"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-34 h-25 mb-4 filter drop-shadow-[0_0_15px_#00ffff]"
                            />
                            <p className="text-white font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;


