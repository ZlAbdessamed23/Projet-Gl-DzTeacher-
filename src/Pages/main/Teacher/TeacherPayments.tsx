import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import StudentsDisplayTable from "../../../Components/main/Teacher/StudentsDisplayTable";
import AddStudentModal from "../../../Components/main/Modals/AddStudentModal";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
  "Tous",
];

const subjects = [
  "Mathématiques",
  "Physique",
  "Chimie",
  "Biologie",
  "Histoire",
  "Tous",
];

const groupes = Array.from({ length: 6 }, (_, index) => `Groupe ${index + 1}`);

const initialStudents = [
  { id: "1", lastName: "Ahmed", firstName: "Drouhi.F", status: "Payé" },
  { id: "2", lastName: "Mounir", firstName: "Floubi.A", status: "Non payé" },
  { id: "3", lastName: "Knhss", firstName: "Lamka.V", status: "Non payé" },
  { id: "4", lastName: "Sbnvh", firstName: "Cgshn.H", status: "Payé" },
  { id: "5", lastName: "Ctreye", firstName: "Youo.B", status: "Non payé" },
  { id: "6", lastName: "Bvcyt", firstName: "Lino.S", status: "Payé" },
];

const Dropdown = ({
  title,
  options,
  selected,
  setSelected,
}: {
  title: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-72 cursor-pointer`}
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
        <ul className="absolute top-full left-0 w-full bg-white border border-ternary-color rounded-md mt-2 z-10">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 text-sm hover:bg-gray-100"
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
      )}
    </div>
  );
};

const TeacherPayments = () => {
  const [selectedMonth, setSelectedMonth] = useState("Tous");
  const [selectedSubject, setSelectedSubject] = useState("Tous");
  const [selectedGroup, setSelectedGroup] = useState("Tous");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddStudent = () => {
    console.log("New student has been added to the Db");
  };
  //   const [selectedTeacher, setSelectedTeacher] = useState("Tous");

  // Filter payments based on selected filters
  //   const filteredPayments = fakePayments.filter((payment) => {
  //     const monthMatch =
  //       selectedMonth === "Tous" || payment.month === selectedMonth;
  //     const subjectMatch =
  //       selectedSubject === "Tous" || payment.subject === selectedSubject;
  //     const teacherMatch =
  //       selectedTeacher === "Tous" || payment.teacherName === selectedTeacher;
  //     return monthMatch && subjectMatch && teacherMatch;
  //   });

  return (
    <MainPagesWrapper
      subTitle="Suivez vos groupes et validez leurs paiements"
      title="Gestion des Étudiants"
    >
      <div className="w-11/12 mx-auto flex items-center">
        <div className="w-1/2 flex flex-col items-start gap-4">
          <Dropdown
            title="Mois"
            options={months}
            selected={selectedMonth}
            setSelected={setSelectedMonth}
          />
          <Dropdown
            title="Niveau"
            options={subjects}
            selected={selectedSubject}
            setSelected={setSelectedSubject}
          />
          <Dropdown
            title="Matières"
            options={subjects}
            selected={selectedSubject}
            setSelected={setSelectedSubject}
          />
          <Dropdown
            title="Groupe"
            options={groupes}
            selected={selectedGroup}
            setSelected={setSelectedGroup}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-8 justify-center items-center">
          <button
            className="px-6 py-2 ml-auto font-poppins text-base bg-main-color text-white rounded-sm hover:bg-dark"
            onClick={() => setIsAddModalOpen(true)}
          >
            Ajouter un nouveau étudiant
          </button>
          <StudentsDisplayTable students={initialStudents} />
        </div>
      </div>

      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onApply={handleAddStudent}
      />
    </MainPagesWrapper>
  );
};

export default TeacherPayments;
