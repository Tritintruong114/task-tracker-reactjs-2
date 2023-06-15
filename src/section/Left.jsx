import {
  UilAngleDoubleLeft,
  UilAngleDoubleRight,
  UilExpandArrowsAlt,
} from "@iconscout/react-unicons";
import { faker } from "@faker-js/faker";
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
            <div className="w-3/4 h-fit bg-white rounded-md  flex-shrink-0">
              <div className="flex items-center flex-col px-3">
                <h1 className="font-bold text-center">Maison De Villa</h1>
                <img
                  className="object-cover shadow w-full rounded-md"
                  src="https://cdn.discordapp.com/attachments/1086992781827915834/1115204960087453736/image.png"
                ></img>
              </div>
              <div className="flex md:flex-col xl:flex-row w-full justify-between px-3">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">Assigned</h1>
                  <h1 className="text-sm text-opacity-30 text-black font-bold italic text-center">
                    Bruon Truong
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">Status</h1>
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>{" "}
            <div className="w-3/4 h-fit bg-white rounded-md  flex-shrink-0">
              <div className="flex items-center flex-col px-3">
                <h1 className="font-bold text-center">Maison De Villa</h1>
                <img
                  className="object-cover shadow w-full rounded-md"
                  src="https://cdn.discordapp.com/attachments/1086992781827915834/1115204960087453736/image.png"
                ></img>
              </div>
              <div className="flex md:flex-col xl:flex-row w-full justify-between px-3">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">Assigned</h1>
                  <h1 className="text-sm text-opacity-30 text-black font-bold italic text-center">
                    Bruon Truong
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-md">Status</h1>
                  <span className="font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
