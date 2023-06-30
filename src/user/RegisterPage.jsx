import { Account, Client, ID } from "appwrite";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../features/userAuthSlice";
import { toast, ToastContainer } from "react-toastify";
import { processRegister } from "../ultils";

function RegisterPage() {
  const dispatch = useDispatch();

  const [process, setProcess] = useState("first");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const client = new Client();
    const account = new Account(client);
    client
      .setEndpoint(import.meta.env.VITE_BASE_APPWRITE_URL)
      .setProject(import.meta.env.VITE_PROJECT_ID);
    const promise = account.create(ID.unique(), email, password, name);

    promise.then(
      function (response) {
        console.log(response);
        dispatch(registerNewUser({ email, name }));
        toast.success("Register Success");
      },
      function (error) {
        console.log(error);
        toast.error("Try again");
      }
    );
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleProcess = () => {
    setProcess("second");
    if (process === "second") {
      setProcess("third");
    }
    if (process === "third") {
      setProcess("first");
    }
  };
  return (
    <div className="col-span-2 rounded-xl  backdrop-blur-md shadow-md md:from-ximen md:to-lightXimen md:bg-gradient-to-tl text-black  md:text-black h-full  w-full flex flex-col justify-center items-center">
      {process === "first" && (
        <form
          className="flex flex-col w-2/4 md:w-3/4 xl:w-1/2 items-start justify-center h-full gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 grid-cols-3 w-full">
            {processRegister.map((set) => {
              return (
                <div
                  key={set.id}
                  className={`col-span-1 ${
                    process === set.name ? "bg-active" : "bg-white"
                  } w-full h-3`}
                ></div>
              );
            })}
          </div>
          <h1 className="xl:text-xl w-full md:text-xl text-white">
            Welcome to{" "}
            <p className="md:text-3xl text-3xl font-extrabold">Register</p>
          </h1>
          <label className="flex flex-col w-full text-white">
            Email
            <input
              placeholder="truongtritin.bee@gmail.com"
              className="py-2 px-3 focus:outline-none text-black rounded-md shadow-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            Password
            <input
              placeholder="min 8 characters"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            User Name
            <input
              placeholder="Bruno"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {process ? (
            <button
              onClick={() => handleProcess()}
              className="py-2 hover:bg-lightXimen hover:text-white px-6 hover:scale-110 transition ease-in-out shadow-md text-black  bg-white rounded-md w-full mt-3 "
            >
              Next
            </button>
          ) : (
            <button
              className="py-2 hover:bg-lightXimen hover:text-white px-6 hover:scale-110 transition ease-in-out shadow-md text-black  bg-white rounded-md w-full mt-3 "
              type="submit"
            >
              Register
            </button>
          )}
        </form>
      )}{" "}
      {process === "second" && (
        <form
          className="flex flex-col w-2/4 md:w-3/4 xl:w-1/2 items-start justify-center h-full gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 grid-cols-3 w-full">
            {processRegister.map((set) => {
              return (
                <div
                  key={set.id}
                  className={`col-span-1 ${
                    process === set.name ? "bg-active" : "bg-white"
                  } w-full h-3`}
                ></div>
              );
            })}
          </div>
          <h1 className="xl:text-xl w-full md:text-xl text-white">
            Add{" "}
            <p className="md:text-3xl text-3xl font-extrabold">Tech Stack</p>
          </h1>
          <label className="flex flex-col w-full text-white">
            Email
            <input
              placeholder="truongtritin.bee@gmail.com"
              className="py-2 px-3 focus:outline-none text-black rounded-md shadow-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            Password
            <input
              placeholder="min 8 characters"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            User Name
            <input
              placeholder="Bruno"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button
            onClick={() => handleProcess()}
            className="py-2 hover:bg-lightXimen hover:text-white px-6 hover:scale-110 transition ease-in-out shadow-md text-black  bg-white rounded-md w-full mt-3 "
          >
            Next
          </button>
        </form>
      )}
      {process === "third" && (
        <form
          className="flex flex-col w-2/4 md:w-3/4 xl:w-1/2 items-start justify-center h-full gap-3"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3 grid-cols-3 w-full">
            {processRegister.map((set) => {
              return (
                <div
                  key={set.id}
                  onClick={()=>setProcess()}
                  className={`col-span-1 ${
                    process === set.name ? "bg-active" : "bg-white"
                  } w-full h-3`}
                ></div>
              );
            })}
          </div>
          <h1 className="xl:text-xl w-full md:text-xl text-white">
            Add{" "}
            <p className="md:text-3xl text-3xl font-extrabold">Tech Stack</p>
          </h1>
          <label className="flex flex-col w-full text-white">
            Email
            <input
              placeholder="truongtritin.bee@gmail.com"
              className="py-2 px-3 focus:outline-none text-black rounded-md shadow-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            Password
            <input
              placeholder="min 8 characters"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full text-white">
            User Name
            <input
              placeholder="Bruno"
              className="py-2 px-3 text-black focus:outline-none rounded-md shadow-md"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button
            type="submit"
            className="py-2 hover:bg-lightXimen hover:text-white px-6 hover:scale-110 transition ease-in-out shadow-md text-black  bg-white rounded-md w-full mt-3 "
          >
            Register
          </button>
          <div className="absolute ">
            <ToastContainer position="top-left" />
          </div>
        </form>
      )}
    </div>
  );
}

export default RegisterPage;
