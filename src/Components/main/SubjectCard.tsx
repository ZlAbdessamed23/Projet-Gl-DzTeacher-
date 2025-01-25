import { Subjects } from "../../Types/types";

const SubjectCard = ({ props }: { props: Subjects }) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-40 h-12 border-2 border-ternary-color rounded-xl text-2xl font-poppins text-ternary-color">
        {props.name}
      </button>
      <div className="bg-ternary-extra-light-color text-white rounded-xl ">
        <p className="px-8">Coeff : {props.coeff}</p>
      </div>
    </div>
  );
};

export default SubjectCard;
