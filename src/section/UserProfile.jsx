import React from "react";

const UserProfile = () => {
  return (
    <div
      className={`col-span-4 p-6 bg-white text-black no-scrollbar h-full overflow-scroll`}
    >
      <div className="w-full gap-3 flex h-full ">
        {" "}
        <div className="w-1/4 h-full rounded-3xl bg-white shadow-xl">
          This is Avatar
        </div>
        <div className="w-3/4 rounded-3xl h-full bg-white shadow-xl">
          {" "}
          This is Detail
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
