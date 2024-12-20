import { Level, SubjectNames } from "./constants";

interface RegisterUser {
    name:  string;
    email:  string;
    password:  string;
};

interface LoginUser {
    email:  string;
    password:  string;
};

interface Subjects {
    name : SubjectNames;
    coeff : number;
};

interface TeacherInfos {
    name : string;
    level : Level[];
    location : string;
    subject : string;
};