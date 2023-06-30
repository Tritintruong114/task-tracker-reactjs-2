import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logInUser, register } from "../features/userAuthSlice";
import "react-toastify/dist/ReactToastify.css";
import registerBG from "../../public/registerBG.png";
import RegisterPage from "../user/RegisterPage";

const Register = () => {
  const { isRegister } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const client = new Client();
  //   const account = new Account(client);
  //   client
  //     .setEndpoint(import.meta.env.VITE_BASE_APPWRITE_URL)
  //     .setProject(import.meta.env.VITE_PROJECT_ID);
  //   const promise = account.create(ID.unique(), email, password, name);

  //   promise.then(
  //     function (response) {
  //       console.log(response, response.$id);
  //       dispatch(registerNewUser({ email, name }));
  //       toast.success("Register Success");
  //     },
  //     function (error) {
  //       console.log(error);
  //     }
  //   );

  //   setEmail("");
  //   setName("");
  //   setPassword("");
  // };

  const handleRegister = () => {
    dispatch(register());
  };
  const handleLogIn = () => {
    dispatch(logInUser());
  };
  return (
    <div className="grid h-full relative md:col-span-6 md:grid-cols-6  w-full">
      <div className="md:col-span-2 p-3 z-10 h-full w-full flex justify-center items-center">
        {isRegister == true && <RegisterPage />}
        {isRegister == false && (
          <div className="col-span-2  md:from-ximen md:to-lightXimen md:bg-gradient-to-tl  shadow-md text-black  md:text-black backdrop-blur-md md:backdrop-blur-none h-full rounded-xl bg-yellow-50   w-full flex flex-col justify-center items-center">
            <form
              className="flex flex-col  w-2/4 md:w-3/4  xl:w-1/2 md:items-start items-center justify-center h-full gap-3"
              onSubmit={handleLogIn}
            >
              <h1 className="xl:text-3xl md:text-xl text-white">
                Welcome to{" "}
                <p className="md:text-3xl xl:text-6xl text-6xl font-extrabold">
                  Trackit
                </p>
              </h1>
              <label className="flex flex-col w-full text-white">
                Email
                <input
                  placeholder="truongtritin.bee@gmail.com"
                  className="py-2 text-black px-3 focus:outline-none text-sm rounded-md shadow-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col w-full text-white">
                Password
                <input
                  placeholder="password"
                  className="py-2  text-black px-3  text-sm  focus:outline-none rounded-md shadow-md"
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
                  <button className="profile">Login</button>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="col-span-4 md:opacity-100 h-full p-3 z-0 md:relative absolute  w-full">
        <img className="h-full object-cover rounded-xl" src={registerBG}></img>
      </div>
      {/* <div className="absolute">
        <ToastContainer position="top-left" />
      </div> */}
    </div>
  );
};

export default Register;
