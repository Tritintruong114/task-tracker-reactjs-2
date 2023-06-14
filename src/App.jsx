import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";

function App() {
  return (
    <main className="flex w-ful font-poppins h-screen p-6">
      {/* Right */}
      <div className="grid-cols-6 grid w-full shadow-2xl rounded-3xl">
        <Right />

        {/* Main */}
        <Main />

        {/* Left */}
        <Left />
      </div>
    </main>
  );
}

export default App;
