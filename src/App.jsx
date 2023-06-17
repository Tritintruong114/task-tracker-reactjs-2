import { useSelector } from "react-redux";
import Left from "./section/Left";
import Right from "./section/Right";
import Register from "./section/Register";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import Main from "./section/Main";

function App() {
  const { isAuth } = useSelector((store) => store.userAuth);
  const { hideRightNavBar } = useSelector((store) => store.projectsStatus);

  return (
    <main className="flex w-ful font-poppins h-screen md:p-6">
      <div className="md:grid-cols-6 h-full md:grid w-full shadow-2xl md:rounded-3xl overflow-scroll no-scrollbar">
        {/* <ToastContainer /> */}
        {/* {isAuth == false ? (
          <Register />
        ) : ( */}
        <>
          {hideRightNavBar == false && <Right />}

          <Main />

          <Left />
        </>
        {/* )} */}
      </div>
    </main>
  );
}

export default App;
