import { Level, CourseType } from "../../Types/constants";
import { Teacher } from "../../Types/types";
import TeacherCard from "../main/Teacher/TeacherCard";

const LandingPageSearchPage = () => {
  const teachers: Teacher[] = [
    {
      name: "Alice Johnson",
      level: [Level.primary, Level.cem],
      location: "New York, NY",
      subject: ["Mathematics", "Physics"],
      experience: "5 years",
      diploma: "Master's in Education",
      available: CourseType.online,
      tarifs: ["$30/hour", "$250/month"],
      contacts: {
        phone: "555-123-4567",
        email: "alice.johnson@example.com"
      }
    },
    {
      name: "Bob Smith",
      level: [Level.university],
      location: "Los Angeles, CA",
      subject: ["Computer Science", "Data Science"],
      experience: "8 years",
      diploma: "PhD in Computer Science",
      available: CourseType.local,
      tarifs: ["$50/hour", "$400/month"],
      contacts: {
        phone: "555-987-6543",
        email: "bob.smith@example.com"
      }
    },
    {
      name: "Catherine Lee",
      level: [Level.primary],
      location: "Chicago, IL",
      subject: ["English", "Literature"],
      experience: "3 years",
      diploma: "Bachelor's in English",
      available: CourseType.online,
      tarifs: ["$25/hour", "$200/month"],
      contacts: {
        phone: "555-555-1212",
        email: "catherine.lee@example.com"
      }
    },
    {
      name: "David Brown",
      level: [Level.cem, Level.lycee],
      location: "Houston, TX",
      subject: ["Chemistry", "Biology"],
      experience: "10 years",
      diploma: "Master's in Science",
      available: CourseType.online,
      tarifs: ["$40/hour", "$350/month"],
      contacts: {
        phone: "555-222-3333",
        email: "david.brown@example.com"
      }
    },
    {
      name: "Eva Green",
      level: [Level.primary, Level.lycee],
      location: "Miami, FL",
      subject: ["Art", "Design"],
      experience: "4 years",
      diploma: "Bachelor's in Fine Arts",
      available: CourseType.local,
      tarifs: ["$35/hour", "$300/month"],
      contacts: {
        phone: "555-444-5678",
        email: "eva.green@example.com"
      }
    }
  ];


  return (
    <div>
      {
        teachers.map((teacher) => <TeacherCard teacher={teacher} />)
      }
    </div>
  )
};

export default LandingPageSearchPage;