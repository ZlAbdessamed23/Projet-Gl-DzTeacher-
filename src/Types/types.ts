import { IconType } from "react-icons";
import { Level, PaymentStatus, SubjectNames, UserType } from "./constants";

export interface RegisterUser {
    name:  string;
    email:  string;
    password:  string;
    type : UserType;
};

export interface LoginUser {
    email:  string;
    password:  string;
    type : UserType;
};

export interface Subjects {
    name : SubjectNames;
    coeff : number;
};

export interface TeacherInfos {
    name : string;
    level : Level[];
    location : string;
    subject : string;
};

export interface Document extends LightDocument {
    title : string;
    description : string;
    file : File;
    senderId : string;
    createdAt : Date | string;
};

export interface LightDocument {
    id: string;
    subject : string;
    senderName : string;
};

export interface StudentPayment {
    id : string;
    month : string;
    teacherId : string;
    teacherName : string;
    subject : string;
    paymentStatus : PaymentStatus;
};











export interface SideBarItemType {
    url : string;
    Icon : IconType;
    name : string;
};