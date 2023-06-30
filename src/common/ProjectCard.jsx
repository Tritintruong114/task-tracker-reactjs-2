import { useSelector } from "react-redux";

function ProjectCard() {
  const { userName } = useSelector((store) => store.userAuth);
  return (
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
            {userName}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-md">Status</h1>
          <span className="font-bold text-green-600">100%</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
