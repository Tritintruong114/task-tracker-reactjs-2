const ProjectStatus = () => {
  //This is the second part of the rightSide of the board
  return (
    <div className="w-full h-full ">
      <select
        className="w-full py-1 focus:outline-none bg-slate-300/10  shadow-md rounded-md  pl-3"
        name="select"
        id="select"
      >
        <label htmlFor="select">Status</label>
        <option selected>Status</option>
        <option>Active ✔️</option>
        <option>Cancel ❌</option>
      </select>
      <div className="w-full">ABC</div>
    </div>
  );
};

export default ProjectStatus;
