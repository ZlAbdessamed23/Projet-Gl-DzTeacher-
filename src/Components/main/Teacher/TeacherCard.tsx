import React from "react"
import { Teacher } from "../../../Types/types"
import { IoSchoolSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

//not finished

interface CmpDataType {
    teacher: Teacher;
}

const LabelCmp = ({ label, data }: { label: string, data: string }) => {
    return (
        <div className="flex items-center gap-4">
            <span className="text-ternary-semi-dark-color text-lg">
                {label}
            </span>
            <span className="w-11/12 text-wrap text-ternary-extra-light-color text-base">
                {data}
            </span>

        </div>
    )
};


const TeacherCard: React.FC<CmpDataType> = ({ teacher }) => {
    return (
        <div className="h-96 w-[35rem] rounded-lg border-2 border-ternary-color grid grid-cols-[15%,85%] relative">
            <div className="bg-ternary-semi-dark-color">

            </div>
            <div>
                <div className="w-11/12 mx-auto">
                    <p className="text-ternary-dark-color text-2xl text-center">{teacher.name}</p>
                    <div className="w-1/2 mx-auto flex items-center gap-3 border-b border-b-ternary-semi-dark-color">
                        <IoSchoolSharp className="size-11" />
                        <div className="flex gap-2 pl-1">
                            <span className="border-l border-l-ternary-extra-light-color mb-2 mr-1">
                                {
                                    teacher.subject.map((subj) => <p className="text-ternary-semi-dark-color text-lg">{subj}</p>)
                                }
                            </span>
                            <span>
                                {
                                    teacher.level.map((lvl) => <p className="text-ternary-semi-dark-color text-lg">{lvl}</p>)
                                }
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-6">
                        <LabelCmp label="Experience" data={teacher.experience} />
                        <LabelCmp label="Diplome" data={teacher.diploma} />
                        <LabelCmp label="Disponibilité" data={teacher.available} />
                        <LabelCmp label="Localisation" data={teacher.location} />
                    </div>
                    <div>
                        <div className="flex flex-col gap-1">
                            <h6 className="text-ternary-dark-color text-lg"> Contacts</h6>
                            <span className="text-ternary-dark-color text-base flex items-center">
                                <span><MdLocalPhone className="size-7 " /></span>
                                <span>{teacher.contacts.phone}</span>
                            </span>
                            <span className="w-11/12 text-wrap text-ternary-dark-color text-base flex items-center">
                                <span><IoIosMail className="size-7 " /></span>
                                <span>{teacher.contacts.email}</span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            <img src="" alt="" className="absolute top-1/2 left-1/4" />
        </div>
    )
}

export default TeacherCard