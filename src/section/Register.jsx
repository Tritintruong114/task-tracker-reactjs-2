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
    <div className="grid h-full relative md:col-span-6 md:grid-cols-6 bg-gray-300 w-full">
      <div className="md:col-span-2 z-10 h-full w-full flex justify-center items-center">
        {isRegister == true && (
          <div className="col-span-2 w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col w-1/2 items-start justify-center h-full gap-3"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col w-full">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <button type="submit">Register</button>
            </form>
          </div>
        )}
        {isRegister == false && (
          <div className="col-span-2 w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col w-1/2 items-center justify-center h-full gap-3"
              onSubmit={handleLogIn}
            >
              <label className="flex flex-col w-full">
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className="w-full gap-3 flex flex-col">
                <button className="opacity-60 py-1 px-6  text-sm">
                  Forgot password?
                </button>
                <button
                  className="py-1 px-6 bg-rose-600/30"
                  onClick={() => handleRegister()}
                >
                  Register
                </button>
                <button className="py-1 px-6 bg-rose-600/30" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="col-span-4 md:opacity-100 p-3 z-0 md:relative absolute   w-full">
        <img className="h-full object-cover rounded-md" src={registerBG}></img>
      </div>
      <div className="absolute">
        <ToastContainer position="top-left" />
      </div>
    </div>
  );
};

export default Register;
