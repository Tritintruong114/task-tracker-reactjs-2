import {
  UilAngleDoubleLeft,
  UilAngleDoubleRight,
  UilExpandArrowsAlt,
} from "@iconscout/react-unicons";
import ProjectCard from "../common/ProjectCard";
const Left = () => {
  //This is for the left side of the board
  return (
    <div className="col-span-1  drop-shadow-xl h-full from-ximen to-lightXimen bg-gradient-to-bl  text-white">
      <div className="h-full w-full p-3 rounded-r-xl">
        <div className="flex w-full items-center justify-between md:justify-start gap-3">
          <UilAngleDoubleLeft size={30} />
          <UilExpandArrowsAlt size={20} />
          <UilAngleDoubleRight size={30} />
        </div>
        <h1 className="p-3 font-bold text-lg text-white">
          Your recent project work
        </h1>
        <div className="py-3 w-full text-black">
          <div className="w-full shadow-md flex gap-3 overflow-scroll no-scrollbar h-fit py-3  rounded-xl">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
