import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import MainPagesWrapper from '../../../Components/main/MainPagesWrapper';
import { PaymentStatus } from '../../../Types/constants';
import { StudentPayment } from '../../../Types/types';
import StudentsPaymentsDisplayTable from '../../../Components/main/StudentsPaymentsDisplayTable';

const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre', 'Tous',
];

const subjects = ['Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Histoire', 'Tous'];

const teachers = [
    { id: 1, teacherName: 'Mme Dupont' },
    { id: 2, teacherName: 'M. Durand' },
    { id: 3, teacherName: 'Mme Lefevre' },
    { id: 4, teacherName: 'M. Bernard' },
    { id: 5, teacherName: 'Tous' },
];

const fakePayments: StudentPayment[] = [
    {
        id: '1',
        month: 'Janvier',
        teacherId: '1',
        teacherName: 'Mme Dupont',
        subject: 'Mathématiques',
        paymentStatus: PaymentStatus.Payed,
    },
    {
        id: '2',
        month: 'Février',
        teacherId: '2',
        teacherName: 'M. Durand',
        subject: 'Physique',
        paymentStatus: PaymentStatus.notPayed,
    },
    {
        id: '3',
        month: 'Mars',
        teacherId: '3',
        teacherName: 'Mme Lefevre',
        subject: 'Chimie',
        paymentStatus: PaymentStatus.pending,
    },
    {
        id: '4',
        month: 'Avril',
        teacherId: '4',
        teacherName: 'M. Bernard',
        subject: 'Biologie',
        paymentStatus: PaymentStatus.Payed,
    },
    {
        id: '5',
        month: 'Mai',
        teacherId: '5',
        teacherName: 'Tous',
        subject: 'Histoire',
        paymentStatus: PaymentStatus.notPayed,
    },
];

const Dropdown = ({ title, options, selected, setSelected }: {
    title: string;
    options: string[];
    selected: string;
    setSelected: (value: string) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`relative bg-[#90CBD633] border border-ternary-color rounded-md px-4 py-2 w-64 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <div className="absolute top-0 left-2 text-xs text-gray-700 font-medium">
                    {title}
                </div>
                <span className="text-lg font-medium">{selected || title}</span>
                <MdKeyboardArrowDown
                    className={`size-8 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

const StudentPayments = () => {
    const [selectedMonth, setSelectedMonth] = useState('Tous');
    const [selectedSubject, setSelectedSubject] = useState('Tous');
    const [selectedTeacher, setSelectedTeacher] = useState('Tous');

    // Filter payments based on selected filters
    const filteredPayments = fakePayments.filter(payment => {
        const monthMatch = selectedMonth === 'Tous' || payment.month === selectedMonth;
        const subjectMatch = selectedSubject === 'Tous' || payment.subject === selectedSubject;
        const teacherMatch = selectedTeacher === 'Tous' || payment.teacherName === selectedTeacher;
        return monthMatch && subjectMatch && teacherMatch;
    });

    return (
        <MainPagesWrapper
            subTitle="Visualisez et gérez vos paiements par matière et enseignant"
            title="Suivi des Paiements"
        >
            <div className='w-11/12 mx-auto flex items-center'>
                <div className="w-1/2 flex flex-col items-center gap-4">
                    <Dropdown
                        title="Mois"
                        options={months}
                        selected={selectedMonth}
                        setSelected={setSelectedMonth}
                    />
                    <Dropdown
                        title="Matières"
                        options={subjects}
                        selected={selectedSubject}
                        setSelected={setSelectedSubject}
                    />
                    <Dropdown
                        title="Enseignants"
                        options={teachers.map((teacher) => teacher.teacherName)}
                        selected={selectedTeacher}
                        setSelected={setSelectedTeacher}
                    />
                </div>
                <div className="w-1/2">
                    <StudentsPaymentsDisplayTable payments={filteredPayments} />
                </div>
            </div>
        </MainPagesWrapper>
    );
};

export default StudentPayments;
