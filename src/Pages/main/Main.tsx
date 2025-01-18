import Footer from "../../Components/main/Footer";
import MainPagesWrapper from "../../Components/main/MainRoutesWrapper";
import Sidebar from "../../Components/main/Sidebar";

const Main = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-hidden">
      <div className="flex flex-grow">
        <Sidebar />
        <MainPagesWrapper />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
