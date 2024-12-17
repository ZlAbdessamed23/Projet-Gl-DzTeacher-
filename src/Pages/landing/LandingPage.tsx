import Header from "../../Components/landing/Header";
import Footer from "../../Components/landing/Footer";
import Search from "../../Components/landing/SearchSection";
import TeacherQualification from "../../Components/landing/TeacherQualification";
import FAQSection from "../../Components/landing/Faq";
import FeaturesSection from "../../Components/landing/Features";
import HowItWorksSection from "../../Components/landing/HowItWorks";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Search />
      <FeaturesSection />
      <HowItWorksSection />
      <TeacherQualification />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
