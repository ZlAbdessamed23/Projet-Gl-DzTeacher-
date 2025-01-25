import { Route, Routes } from "react-router-dom";
import { UserType } from "../../Types/constants";
import Documents from "../../Pages/main/Student/Documents";
import SingleTeacherDocuments from "../../Pages/main/Student/SingleTeacherDocuments";
import StudentPayments from "../../Pages/main/Student/StudentPayments";
import TeacherPayments from "../../Pages/main/Teacher/TeacherPayments";
import TeacherDocuments from "../../Pages/main/Teacher/TeacherDocuments";
import TeacherCourses from "../../Pages/main/Teacher/TeacherCourses";
import Courses from "../../Pages/main/Student/Courses";
import TeacherProfile from "../../Pages/main/Teacher/TeacherProfile";

const MainRoutesWrapper = () => {
  const userRole = UserType.student; //for test only , so we can have unified routes , later we will fetch to get this value
  return (
    <div className="flex-grow">
      <Routes>
        {userRole === UserType.student ? (
          <>
            <Route path="documents" element={<TeacherDocuments />} />
            <Route path="payments" element={<TeacherPayments />} />
            <Route path="courses" element={<TeacherCourses />} />
            <Route path="profile" element={<TeacherProfile />} />
          </>
        ) : (
          <>
            <Route path="documents" element={<Documents />} />
            <Route path="documents/:id" element={<SingleTeacherDocuments />} />
            <Route path="payments" element={<StudentPayments />} />
            <Route path="courses" element={<Courses />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default MainRoutesWrapper;
