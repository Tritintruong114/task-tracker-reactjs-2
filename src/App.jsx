import Left from "./section/Left";
import Main from "./section/Main";
import Right from "./section/Right";

function App() {
  return (
    <main className="flex w-ful font-poppins h-screen p-6">
      {/* Right */}
      <div className="md:grid-cols-6 grid w-full shadow-2xl rounded-3xl">
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
