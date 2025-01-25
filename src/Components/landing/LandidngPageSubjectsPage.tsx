import { useParams } from "react-router-dom";
import { Subjects } from "../../Types/types";
import SubjectCard from "../main/SubjectCard";

const SubjectsLayout = () => {
  const { level } = useParams<{ level?: string }>();

  const formatDisplayLevel = (rawLevel?: string) => {
    if (!rawLevel) return "3ème année - Lycée";

    const decodedLevel = decodeURIComponent(rawLevel);

    // Detect category based on URL structure
    let category = "Lycée";
    if (decodedLevel.includes("_primaire")) category = "Primaire";
    if (decodedLevel.includes("_college")) category = "Collège";

    // Clean up and format the level
    const formattedLevel = decodedLevel
      .replace(/_/g, " ")
      .replace(/(\d)(eme)/, "$1ème")
      .replace(/(\d)(ere)/, "$1ère")
      .replace(/_primaire|_college/g, "");

    return `${formattedLevel} ${category}`;
  };

  const subjects: Subjects[] = [
    { name: "arab", coeff: 2 },
    { name: "francais", coeff: 1 },
    { name: "math", coeff: 5 },
    { name: "english", coeff: 1 },
    { name: "phys", coeff: 4 },
    { name: "science", coeff: 4 },
    { name: "english", coeff: 1 },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-ternary-color text-center mb-8">
        {formatDisplayLevel(level)} - Choisissez une matiere
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subjects.map((subject, index) => (
          <SubjectCard key={index} props={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectsLayout;
