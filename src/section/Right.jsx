import LogoComponent from "../common/LogoComponent";
import Avatar from "react-avatar";
import ProjectStatus from "../common/ProjectStatus";
import {
  UilEstate,
  UilFolder,
  UilCommentAltDots,
  UilUsersAlt,
  UilChart,
  UilQuestionCircle,
  UilSetting,
  UilSignout,
} from "@iconscout/react-unicons";
const rightNavBarMenuIcon = [
  {
    nameButton: "Home",
    iconComponent: <UilEstate />,
  },
  {
    nameButton: "Folder",
    iconComponent: <UilFolder />,
  },
  {
    nameButton: "Chat",
    iconComponent: <UilCommentAltDots />,
  },
  {
    nameButton: "Group",
    iconComponent: <UilUsersAlt />,
  },
  {
    nameButton: "Chart",
    iconComponent: <UilChart />,
  },
  {
    nameButton: "Question",
    iconComponent: <UilQuestionCircle />,
  },
];

const rightNavBarSettingIcon = [
  {
    nameButton: "Setting",
    iconComponent: <UilSetting />,
  },
  {
    nameButton: "Logout",
    iconComponent: <UilSignout />,
  },
  {
    nameButton: "Logo",
    iconComponent: <LogoComponent />,
  },
];

const Right = () => {
  //This is the first part of the right side
  return (
    <div className=" drop-shadow-xl md:p-3 border-r md:h-full md:col-span-1 col-span-4 md:grid grid-cols-3">
      <div className="col-span-1 bg-gray-300/30 flex rounded-xl flex-col  justify-between">
        <div className="flex  py-3 flex-col justify-center items-center">
          <div>
            <Avatar
              className="hover:scale-110 shadow-md transition ease-in-out cursor-pointer"
              name="Bruno"
              email="truongtritin.bee@gmail.com"
              round
              size="30"
            />
          </div>
          <div className="flex w-full px-3 no-scrollbar overflow-scroll md:justify-center items-center justify-between md:flex-col">
            {rightNavBarMenuIcon.map((icon) => {
              return (
                <button
                  className="md:h-16 flex-shrink-0 hover:scale-110 transition ease-in-out"
                  key={icon.name}
                >
                  {icon.iconComponent}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-center gap-3">
          {rightNavBarSettingIcon.map((icon) => {
            return (
              <button
                className="md:h-16 h-16 md:opacity-100 opacity-0 absolute md:relative md:visible hover:scale-110 transition ease-in-out"
                key={icon.name}
              >
                {icon.iconComponent}
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-span-2  md:px-3 overflow-scroll no-scrollbar w-full  rounded-r-xl ">
        <ProjectStatus />
      </div>
    </div>
  );
};

export default Right;
