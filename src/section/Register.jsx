import { Client, Account, ID } from "appwrite";
import { useState } from "react";
import { useSelector } from "react-redux";
import { store } from "./../store/store";
import { useDispatch } from "react-redux";
import {
  logInUser,
  register,
  registerNewUser,
} from "../features/userAuthSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import registerBG from "../../public/registerBG.png";
const Register = () => {
  const { isAuth, isRegister, userName } = useSelector(
    (store) => store.userAuth
  );
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Initialize the Appwrite client
    const client = new Client();
    const account = new Account(client);
    client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("6489dc8f889856692476"); // Your project ID
    // const promise = account.create(ID.unique(), email, password, name);
    // promise.then(
    //   function (response) {
    //     console.log(response); // Success
    dispatch(registerNewUser({ email, name }));
    //     // toast.success("Register Success");
    //   },
    //   function (error) {
    //     console.log(error); // Failure
    //   }
    // );
    setEmail("");
    setName("");
    setPassword("");
    toast.success("Register Success");
  };

  const handleRegister = () => {
    dispatch(register());
  };
  const handleLogIn = () => {
    dispatch(logInUser());
  };
  return (
    <div className="grid h-full relative md:col-span-6 md:grid-cols-6  w-full">
      <div className="md:col-span-2 p-3 z-10 h-full w-full flex justify-center items-center">
        {isRegister == true && (
          <div className="col-span-2 rounded-xl  backdrop-blur-md shadow-md md:from-ximen md:to-lightXimen md:bg-gradient-to-tl text-white  md:text-white h-full  w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col w-2/4 md:w-3/4 xl:w-1/2 items-start justify-center h-full gap-3"
              onSubmit={handleSubmit}
            >
              <h1 className="xl:text-3xl md:text-xl">
                Welcome to{" "}
                <p className="md:text-3xl xl:text-6xl text-6xl font-extrabold">
                  Register
                </p>
              </h1>
              <label className="flex flex-col w-full">
                Email:
                <input
                  placeholder="truongtritin.bee@gmail.com"
                  className="py-2 px-3 focus:outline-none rounded-md shadow-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Password:
                <input
                  placeholder="min 8 characters"
                  className="py-2 px-3 focus:outline-none rounded-md shadow-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Name:
                <input
                  placeholder="Bruno"
                  className="py-2 px-3 focus:outline-none rounded-md shadow-md"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <button
                className="py-2 hover:bg-lightXimen hover:text-white px-6 hover:scale-110 transition ease-in-out shadow-md text-black  bg-white rounded-md w-full mt-3 "
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        )}
        {isRegister == false && (
          <div className="col-span-2  md:from-ximen md:to-lightXimen md:bg-gradient-to-tl  shadow-md text-white  md:text-white backdrop-blur-md md:backdrop-blur-none h-full rounded-xl bg-yellow-50   w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col  w-2/4 md:w-3/4  xl:w-1/2 md:items-start items-center justify-center h-full gap-3"
              onSubmit={handleLogIn}
            >
              <h1 className="xl:text-3xl md:text-xl">
                Welcome to{" "}
                <p className="md:text-3xl xl:text-6xl text-6xl font-extrabold">
                  Trackit
                </p>
              </h1>
              <label className="flex flex-col w-full">
                Email:
                <input
                  placeholder="truongtritin.bee@gmail.com"
                  className="py-2 px-3 focus:outline-none text-sm rounded-md shadow-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Password:
                <input
                  placeholder="password"
                  className="py-2 px-3  text-sm  focus:outline-none rounded-md shadow-md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="w-full gap-3 flex flex-col">
                <button className=" py-1 hover:scale-110 transition ease-in-out px-6 text-white md:text-white  text-sm">
                  Forgot password?
                </button>
                <button
                  className="py-2 hover:bg-lightXimen hover:text-white hover:scale-110 transition ease-in-out px-6 shadow-md text-black  bg-white rounded-md "
                  onClick={() => handleRegister()}
                >
                  Register
                </button>
                <button
                  className="py-2 hover:bg-lightXimen hover:text-white  hover:scale-110 transition ease-in-out px-6 shadow-md text-black  bg-white rounded-md "
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="col-span-4 md:opacity-100 h-full p-3 z-0 md:relative absolute  w-full">
        <img className="h-full object-cover rounded-xl" src={registerBG}></img>
      </div>
      <div className="absolute">
        <ToastContainer position="top-left" />
      </div>
    </div>
  );
};

export default Register;
