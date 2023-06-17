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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOutUser } from "../features/userAuthSlice";
import { useState } from "react";
import { showProfile } from "../features/handleButtonSlice";
const rightNavBarMenuIcon = [
  {
    nameButton: "Home",
    iconComponent: <UilEstate size={30} />,
  },
  {
    nameButton: "Folder",
    iconComponent: <UilFolder size={30} />,
  },
  {
    nameButton: "Chat",
    iconComponent: <UilCommentAltDots size={30} />,
  },
  {
    nameButton: "Group",
    iconComponent: <UilUsersAlt size={30} />,
  },
  {
    nameButton: "Chart",
    iconComponent: <UilChart size={30} />,
  },
  {
    nameButton: "Question",
    iconComponent: <UilQuestionCircle size={30} />,
  },
];

const rightNavBarSettingIcon = [
  {
    nameButton: "Setting",
    iconComponent: <UilSetting size={30} />,
  },
  {
    nameButton: "Logout",
    iconComponent: <UilSignout size={30} />,
  },
  {
    nameButton: "Logo",
    iconComponent: <LogoComponent />,
  },
];

//This is the first part of the right side
const Right = () => {
  const dispatch = useDispatch();

  //Handle Log out button
  const handleClick = (name) => {
    if (name === "Logout") {
      dispatch(logOutUser());
    }
  };

  //Handle Show profile of user
  const handleShowProfile = () => {
    dispatch(showProfile(true));
  };

  return (
    <div className=" drop-shadow-xl from-ximen to-lightXimen bg-gradient-to-tr md:p-3 md:h-full md:col-span-1 col-span-4 md:grid grid-cols-3">
      <div className="col-span-1 bg-white text-black flex rounded-xl flex-col  justify-between">
        <div className="flex py-3 flex-col justify-center items-center">
          <div>
            <Avatar
              className="hover:scale-110 shadow-md transition ease-in-out cursor-pointer"
              name="Bruno"
              // email="truongtritin.bee@gmail.com"
              onClick={() => handleShowProfile()}
              round
              size="30"
            />
          </div>
          <div className="flex w-full px-3 no-scrollbar overflow-scroll md:justify-center items-center justify-between md:flex-col">
            {rightNavBarMenuIcon.map((icon) => {
              return (
                <button
                  className="md:h-16 w text-3xl flex-shrink-0 hover:scale-110 transition ease-in-out"
                  key={icon.nameButton}
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
                onClick={() => handleClick(`${icon.nameButton}`)}
                className="md:h-16 h-16 md:opacity-100 opacity-0 absolute md:relative md:visible hover:scale-110 transition ease-in-out"
                key={icon.nameButton}
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
