import {
  GrHomeRounded,
  GrFolder,
  GrChat,
  GrGroup,
  GrSettingsOption,
} from "react-icons/gr";
import { BiBarChartSquare } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import LogoComponent from "../common/LogoComponent";
import Avatar from "react-avatar";
import ProjectStatus from "../common/ProjectStatus";
const rightNavBarMenuIcon = [
  {
    nameButton: "Home",
    iconComponent: <GrHomeRounded size={33} />,
  },
  {
    nameButton: "Folder",
    iconComponent: <GrFolder size={33} />,
  },
  {
    nameButton: "Chat",
    iconComponent: <GrChat size={33} />,
  },
  {
    nameButton: "Group",
    iconComponent: <GrGroup size={33} />,
  },
  {
    nameButton: "Chart",
    iconComponent: <BiBarChartSquare size={33} />,
  },
  {
    nameButton: "Question",
    iconComponent: <BsQuestionCircle size={33} />,
  },
];

const rightNavBarSettingIcon = [
  {
    nameButton: "Setting",
    iconComponent: <GrSettingsOption size={33} />,
  },
  {
    nameButton: "Logout",
    iconComponent: <IoMdExit size={33} />,
  },
  {
    nameButton: "Logo",
    iconComponent: <LogoComponent />,
  },
];

const Right = () => {
  //This is the first part of the right side
  return (
    <div className=" drop-shadow-xl p-3 border-r h-full col-span-1 grid grid-cols-3">
      <div className="col-span-1 bg-gray-300/30 flex rounded-l-xl flex-col  justify-between">
        <div className="flex py-3 flex-col justify-center items-center">
          <div>
            <Avatar
              className="hover:scale-110 shadow-md transition ease-in-out cursor-pointer"
              name="Bruno"
              email="truongtritin.bee@gmail.com"
              round
              size="45"
            />
          </div>
          <div className="flex flex-col gap-3">
            {rightNavBarMenuIcon.map((icon) => {
              return (
                <button
                  className="h-16 hover:scale-110 transition ease-in-out"
                  key={icon.name}
                >
                  {icon.iconComponent}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center -space-y-6">
          {rightNavBarSettingIcon.map((icon) => {
            return (
              <button
                className="h-16 hover:scale-110 transition ease-in-out"
                key={icon.name}
              >
                {icon.iconComponent}
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-span-2  px-3 overflow-scroll no-scrollbar w-full h-full  rounded-r-xl ">
        <ProjectStatus />
      </div>
    </div>
  );
};

export default Right;
