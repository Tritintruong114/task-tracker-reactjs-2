import UserGroup from "../common/UserGroup";
import {
  UilFavorite,
  UilCommentDots,
  UilStopwatch,
  UilEllipsisV,
  UilAngleDoubleLeft,
} from "@iconscout/react-unicons";
const Main = () => {
  return (
    <div className="col-span-4 bg-gray-300/30 p-3 no-scrollbar h-full overflow-scroll">
      <div className=" h-full rounded-t">
        <div className=" p-1 md:p-0 md:gap-9 flex w-full justify-between md:justify-end items-center">
          <div className="md:w-full md:pl-3">
            <UilAngleDoubleLeft
              className="cursor-pointer hover:scale-110 transition ease-in-out"
              onClick={() => console.log("click")}
              size={30}
            />
          </div>
          <div className="flex items-center gap-3 md:gap-9">
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
      </div>
    </div>
  );
};

export default Main;
