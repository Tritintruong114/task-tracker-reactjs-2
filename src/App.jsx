import { useSelector } from "react-redux";
import Left from "./section/Left";
import Main from "./section/Main";
import Right from "./section/Right";
import Register from "./section/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { isAuth } = useSelector((store) => store.userAuth);
  const { hideRightNavBar } = useSelector((store) => store.projectsStatus);
  return (
    <main className="flex w-ful font-poppins h-screen md:p-6">
      <div className="md:grid-cols-6 h-full md:grid w-full shadow-2xl md:rounded-3xl overflow-scroll no-scrollbar">
        {/* <ToastContainer /> */}
        {isAuth == false ? (
          <Register />
        ) : (
          <>
            {/* Right */}

            {hideRightNavBar == false && <Right />}

            {/* Main */}
            <Main />

            {/* Left */}
            <Left />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
