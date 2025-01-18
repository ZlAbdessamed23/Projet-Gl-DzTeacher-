import LightDocumentDisplay from "../../../Components/main/LightDocumentDisplay";
import MainPagesWrapper from "../../../Components/main/MainPagesWrapper";
import DocumentDisplay from "../../../Components/main/DocumentDisplay";
import { MdKeyboardArrowDown } from "react-icons/md";

import React, { useState } from "react";

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
          className={`size-8 transform text-[#3a3838]  transition-transform ${
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

type Document = {
  id: string;
  subject: string;
  senderName: string;
  title: string;
  description: string;
  file: File;
  senderId: string;
  createdAt: string;
};

const subjects = [
  "Mathématiques",
  "Physique",
  "Chimie",
  "Biologie",
  "Histoire",
  "Tous",
];

const fakeFile = new File(["content"], "example.txt", { type: "text/plain" });

const fakeDocuments: Document[] = [
  {
    id: "1",
    subject: "Logique",
    senderName: "John Doe",
    title: "My First Document",
    description: "This is a description of my first document.",
    file: fakeFile,
    senderId: "user-123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    subject: "Logique",
    senderName: "John Doe",
    title: "My First Document",
    description: "This is a description of my first document.",
    file: fakeFile,
    senderId: "user-123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "1",
    subject: "Logique",
    senderName: "John Doe",
    title: "My First Document",
    description: "This is a description of my first document.",
    file: fakeFile,
    senderId: "user-123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    subject: "Logique",
    senderName: "John Doe",
    title: "My First Document",
    description: "This is a description of my first document.",
    file: fakeFile,
    senderId: "user-123",
    createdAt: new Date().toISOString(),
  },
];

const TeacherDocuments: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>(fakeDocuments);
  const [selectedSubject, setSelectedSubject] = useState("Tous");
  const [newDocument, setNewDocument] = useState({
    subject: "",
    title: "",
    file: null as File | null,
  });

  const handleAddDocument = () => {
    if (newDocument.subject && newDocument.title && newDocument.file) {
      const newDoc: Document = {
        id: (documents.length + 1).toString(),
        subject: newDocument.subject,
        senderName: "Current User",
        title: newDocument.title,
        description: "Added via form.",
        file: newDocument.file,
        senderId: "user-456",
        createdAt: new Date().toISOString(),
      };
      setDocuments([...documents, newDoc]);
      setNewDocument({ subject: "", title: "", file: null });
    }
  };

  return (
    <MainPagesWrapper
      subTitle="Documents partagés directement avec vos élèves"
      title="Ressources Pédagogiques"
    >
      <div className="w-full flex flex-col items-center gap-4 ">
        <div className="px-6 pt-6 bg-secondary-color flex flex-col gap-y-40">
          <div className="rounded-xl border-2 border-ternary-color py-4 w-full mx-auto flex flex-col gap-4 bg-secondary-color">
            <div className=" mx-20 my-5">
              {" "}
              <h2 className="text-3xl font-medium text-main-color mb-4">
                Ajouter un document
              </h2>
              <div className=" flex flex-col gap-y-12 pb-6 pt-10">
                <div className="flex justify-between pr-8">
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
                </div>
                <div className="space-y-4">
                  <div className="flex gap-x-5 py-3">
                    <label className="text-xl font-medium">
                      Titre de support :
                    </label>
                    <input
                      type="text"
                      className="w-[320px] px-3 py-2 border rounded-md"
                      value={newDocument.title}
                      onChange={(e) =>
                        setNewDocument({
                          ...newDocument,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex gap-x-5 py-3">
                    <label className="text-xl font-medium">
                      Titre de support :
                    </label>
                    <input
                      type="text"
                      className="w-[320px] px-3 py-2 border rounded-md"
                      value={newDocument.title}
                      onChange={(e) =>
                        setNewDocument({
                          ...newDocument,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <div className="flex gap-x-6">
                      {" "}
                      <label className=" text-xl font-medium mb-1">
                        Votre fichier :
                      </label>
                      <input
                        type="file"
                        className="w-[80%]"
                        onChange={(e) =>
                          setNewDocument({
                            ...newDocument,
                            file: e.target.files?.[0] || null,
                          })
                        }
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleAddDocument}
                    className="px-4 py-2 bg-main-color text-2xl text-white rounded-md hover:bg-dark"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" relative border-t-2 border-l-2 border-r-2 rounded-t-xl border-ternary-color pt-4 w-full mx-auto flex flex-col gap-4">
            <h2 className="text-3xl font-poppins text-main-color bg-secondary-color font-medium absolute top-[-20px] left-1/2 transform -translate-x-1/2">
              Documents partagés
            </h2>
            <div className="mt-6 mb-2">
              {fakeDocuments.map((doc) => (
                <DocumentDisplay doc={doc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainPagesWrapper>
  );
};

export default TeacherDocuments;
