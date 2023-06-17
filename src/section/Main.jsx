import UserGroup from "../common/UserGroup";
import {
  UilFavorite,
  UilCommentDots,
  UilStopwatch,
  UilEllipsisV,
  UilAngleDoubleLeft,
  UilAngleDoubleRight,
} from "@iconscout/react-unicons";
import mainImge from "../../public/mainImg.jpg";
import Dashboard from "../common/Dashboard";
import Overview from "../common/Overview";
import Team from "../common/Team";
import Timeline from "../common/Timeline";
import { useState } from "react";
import Calendar from "../common/Calendar";
import Feedback from "../common/Feedback";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getTodosGroupByColumn,
  hideNavBar,
} from "../features/projectsStatusSlice";
import { useEffect } from "react";

const projectButtons = [
  {
    nameButton: "Overview",
    component: <Overview />,
  },
  {
    nameButton: "Team",
    component: <Team />,
  },
  {
    nameButton: "Timeline",
    component: <Timeline />,
  },
  {
    nameButton: "Dashboard",
    component: <Dashboard />,
  },
  {
    nameButton: "Calendar",
    component: <Calendar />,
  },
  {
    nameButton: "Feedback",
    component: <Feedback />,
  },
];
const Main = () => {
  const [showToMain, setShowToMain] = useState("");
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const dispatch = useDispatch();
  const { hideRightNavBar } = useSelector((store) => store.projectsStatus);

  const handleShowToMain = (name) => {
    setShowToMain(name);
  };
  const handleHideNavBar = (hide) => {
    setToggleNavBar((hide) => !hide);
    dispatch(hideNavBar(hide));
  };

  useEffect(() => {
    console.log("effect");
    dispatch(getTodosGroupByColumn());
  }, []);

  return (
    <div
      className={`col-span-4 ${
        hideRightNavBar == true ? "col-span-5" : ""
      } text-black no-scrollbar h-full overflow-scroll`}
    >
      <div className=" h-full rounded-t">
        <div className=" shadow-md md:p-0 md:gap-9 flex w-full justify-between md:justify-end items-center">
          <div className="md:w-full md:pl-3 py-3">
            {hideRightNavBar == false ? (
              <UilAngleDoubleLeft
                className="cursor-pointer hover:scale-110 transition ease-in-out"
                onClick={() => handleHideNavBar(toggleNavBar)}
                size={30}
              />
            ) : (
              <UilAngleDoubleRight
                className="cursor-pointer hover:scale-110 transition ease-in-out"
                onClick={() => handleHideNavBar(toggleNavBar)}
                size={30}
              />
            )}
          </div>
          <div className="flex items-center py-3 gap-3 md:gap-9">
            <div>
              <UserGroup />
            </div>
            <UilFavorite
              className="cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => console.log("click")}
              size={30}
            />
            <UilCommentDots
              className="cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => console.log("click")}
              size={30}
            />
            <UilStopwatch
              className="cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => console.log("click")}
              size={30}
            />
            <UilEllipsisV
              className="cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => console.log("click")}
              size={30}
            />
          </div>
        </div>
        <div className="w-full h-full overflow-scroll no-scrollbar">
          <div className="w-full h-3/5 p-3">
            <div className="w-full shadow-md relative h-full bg-white rounded-3xl">
              <img
                className="w-full z-0 h-full object-cover absolute rounded-3xl"
                src={mainImge}
              ></img>
              <h1 className="text-white text-6xl bottom-3 left-6 w-2/4 font-bold z-10 absolute">
                AI Technology Company
              </h1>
            </div>
            <div className="w-full justify-around shadow-md flex mt-3 font-bold bg-lightXimen/90 rounded-3xl text-white">
              {projectButtons.map((button) => {
                return (
                  <button
                    onClick={() => handleShowToMain(button.nameButton)}
                    className="hover:bg-ximen/60 rounded-3xl py-3 hover:text-white h-full w-full"
                    key={button.nameButton}
                  >
                    {button.nameButton}
                  </button>
                );
              })}
            </div>
            <div className="grid w-full grid-cols-3 drop-shadow-2xl bg-white  rounded-3xl  mt-3 h-full">
              {showToMain == "Overview" && <Overview />}
              {showToMain == "Team" && <Team />}
              {showToMain == "Timeline" && <Timeline />}
              {showToMain == "Dashboard" && <Dashboard />}
              {showToMain == "Calendar" && <Calendar />}
              {showToMain == "Feedback" && <Feedback />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
