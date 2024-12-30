import { Route, Routes } from "react-router-dom"
import { UserType } from "../../Types/constants"
import Documents from "../../Pages/main/Student/Documents";
import SingleTeacherDocuments from "../../Pages/main/Student/SingleTeacherDocuments";
import StudentPayments from "../../Pages/main/Student/StudentPayments";

const MainRoutesWrapper = () => {
  const userRole = UserType.student;   //for test only , so we can have unified routes , later we will fetch to get this value
  return (
    <div className="flex-grow" >
      <Routes>
        {
          userRole === UserType.student ?
            <>
              <Route path="documents" element={<Documents />} />
              <Route path="documents/:id" element={<SingleTeacherDocuments />} />
              <Route path="payments" element={<StudentPayments />} />
            </>
            :
            <>
              {/* set teacher routes here as you see upon this */}
            </>
        }
      </Routes>
    </div>
  )
}

export default MainRoutesWrapper