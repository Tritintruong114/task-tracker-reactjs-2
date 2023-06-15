const ProjectStatus = () => {
  //This is the second part of the rightSide of the board
  return (
    <div className="w-full ">
      <select
        className="w-full py-1 focus:outline-none bg-slate-300/30  shadow-md rounded-md  pl-3"
        name="select"
        id="select"
      >
        <label htmlFor="select">Status</label>
        <option selected>Status</option>
        <option>Active ✔️</option>
        <option>Cancel ❌</option>
      </select>
      <div className="w-full md:h-full mt-3 text-white ">
        <button className="hover:bg-white hover:text-lightXimen w-full rounded-md">
          AI Tech Com
        </button>
      </div>
    </div>
  );
};

export default ProjectStatus;
