import trackerLogo from "../../public/trackerLogo.png";
import Avatar from 'react-avatar';

const Header = () => {
  return (
    <div className="bg-gray-300 grid grid-cols-4 p-3">
      <div className="col-span-1">
        <img
          className="object-cover"
          height={90}
          width={90}
          src={trackerLogo}
        ></img>
      </div>
      <form className="col-span-2 flex">
        <input
          className="w-full md:w-3/4 outline-none rounded-md"
          type="text"
        ></input>
        <button type="submit">Search</button>
      </form>
      <div className="col-span-1"><Avatar name="Bruno Truong"/></div>
    </div>
  );
};

export default Header;
