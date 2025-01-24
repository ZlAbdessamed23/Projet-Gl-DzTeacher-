import React, { useState, useMemo } from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { 
  Level, 
  CourseType, 
  SubjectNames, 
  Primary, 
  CEM, 
  Lycee 
} from "../../Types/constants";
import TeacherCard from "../main/Teacher/TeacherCard";

const willayas = [
  "tous", "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", 
  // ... (rest of the willayas list remains the same)
];

const Dropdown = ({
  title,
  options,
  selected,
  setSelected,
  level
}: {
  title: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
  level?: Level;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = useMemo(() => {
    if (title === 'Année' && level) {
      switch(level) {
        case Level.primary: return ['tous', ...Object.values(Primary)];
        case Level.cem: return ['tous', ...Object.values(CEM)];
        case Level.lycee: return ['tous', ...Object.values(Lycee)];
        default: return ['tous'];
      }
    }
    return options;
  }, [title, level, options]);

  return (
    <div 
      className="relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-72 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <div className="absolute top-0 left-2 text-xs text-gray-700 font-medium">
          {title}
        </div>
        <span className="text-lg font-medium">{selected || title}</span>
        <MdKeyboardArrowDown
          className={`size-8 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full z-10">
          <ul className="max-h-48 overflow-y-auto bg-white border border-ternary-color rounded-md mt-2 shadow-lg">
            {filteredOptions.map((option) => (
              <li
                key={option}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LandingPageSearchPage: React.FC = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("tous");
  const [selectedLevel, setSelectedLevel] = useState("tous");
  const [selectedYear, setSelectedYear] = useState("tous");
  const [selectedSubject, setSelectedSubject] = useState("tous");
  const [price, setPrice] = useState("");

  const teachers = [
    {
      name: "Alice Johnson",
      level: [Level.primary, Level.cem],
      location: "Alger",
      subject: [SubjectNames.math, SubjectNames.phys],
      experience: "5 years",
      diploma: "Master's in Education",
      available: CourseType.online,
      tarifs: ["2000 DZD/hour"],
      contacts: {
        phone: "555-123-4567",
        email: "alice.johnson@example.com",
      },
      imageUrl: "https://via.placeholder.com/150",
    },
    // ... (other teacher entries remain the same)
  ];

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesWilaya =
        selectedWilaya === "tous" || teacher.location === selectedWilaya;
      const matchesLevel =
        selectedLevel === "tous" || teacher.level.includes(selectedLevel as Level);
      const matchesYear =
        selectedYear === "tous" ||
        (selectedLevel === Level.primary && 
          teacher.level.includes(Level.primary) && 
          Object.values(Primary).includes(selectedYear as Primary)) ||
        (selectedLevel === Level.cem && 
          teacher.level.includes(Level.cem) && 
          Object.values(CEM).includes(selectedYear as CEM)) ||
        (selectedLevel === Level.lycee && 
          teacher.level.includes(Level.lycee) && 
          Object.values(Lycee).includes(selectedYear as Lycee));
      const matchesSubject =
        selectedSubject === "tous" || teacher.subject.includes(selectedSubject as SubjectNames);
      const matchesPrice =
        price === "" || teacher.tarifs.some((tarif) => 
          parseInt(tarif.replace(/\D+/g, "")) <= parseInt(price)
        );

      return (
        matchesWilaya &&
        matchesLevel &&
        matchesYear &&
        matchesSubject &&
        matchesPrice
      );
    });
  }, [selectedWilaya, selectedLevel, selectedYear, selectedSubject, price]);

  return (
    <div className="py-24 w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-ternary-extra-light-color mb-6">
        Résultats de votre Recherche
      </h2>
      <p className="text-xl font-normal pl-8 mb-6">Comparez et choisissez le meilleur</p>
      
      <div className="flex items-center flex-wrap gap-8 mb-6">
        <Dropdown
          title="Wilaya"
          options={willayas}
          selected={selectedWilaya}
          setSelected={setSelectedWilaya}
        />

        <Dropdown
          title="Niveau"
          options={["tous", ...Object.values(Level)]}
          selected={selectedLevel}
          setSelected={(value) => {
            setSelectedLevel(value);
            setSelectedYear("tous");
          }}
        />

        <Dropdown
          title="Année"
          options={["tous"]}
          selected={selectedYear}
          setSelected={setSelectedYear}
          level={selectedLevel === "tous" ? undefined : selectedLevel as Level}
        />

        <Dropdown
          title="Matière"
          options={["tous", ...Object.values(SubjectNames)]}
          selected={selectedSubject}
          setSelected={setSelectedSubject}
        />

        <div
          className="relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-72 cursor-text"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-2 text-xs text-gray-700 font-medium">
            Prix (DZD)
          </div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Entrez un prix"
            className="w-full bg-transparent outline-none text-lg font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default LandingPageSearchPage;