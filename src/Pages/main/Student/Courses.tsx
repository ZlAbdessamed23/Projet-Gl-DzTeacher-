import MainPagesWrapper from "../../../Components/main/MainPagesWrapper"
import StudentCoursesCalendar from "../../../Components/main/StudentCoursesCalendar";
import { CourseType } from "../../../Types/constants";
import { Course } from "../../../Types/types";

const Courses = () => {
    const fixedCourseData: Course[] = [
        {
          id: "C001",
          type: CourseType.local,
          teacherId: "T001",
          teacherName: "John Doe",
          location: "Room 101",
          time: new Date(), 
          subject: "Mathematics",
        },
        {
          id: "C002",
          type: CourseType.online,
          teacherId: "T002",
          teacherName: "Jane Smith",
          location: "Room 202",
          time: "2024-01-01T11:00:00",
          subject: "Physics",
        },
        {
          id: "C003",
          type: CourseType.online,
          teacherId: "T003",
          teacherName: "Emily Johnson",
          location: "Lab 1",
          time: "2024-01-01T13:00:00",
          subject: "Chemistry",
        },
        {
          id: "C004",
          type: CourseType.local,
          teacherId: "T004",
          teacherName: "Michael Brown",
          location: "Room 303",
          time: "2024-01-01T15:30:00",
          subject: "Biology",
        },
        {
          id: "C005",
          type: CourseType.online,
          teacherId: "T005",
          teacherName: "Sarah Davis",
          time: "2024-01-01T00:00:00",
          subject: "Computer Science",
        },
      ];
      

    return (
        <MainPagesWrapper subTitle="" title="Tableau de Bord des Séances">
            <div className="w-11/12 mx-auto">
                <StudentCoursesCalendar courses={fixedCourseData} />
            </div>
        </MainPagesWrapper>
    )
}

export default Courses