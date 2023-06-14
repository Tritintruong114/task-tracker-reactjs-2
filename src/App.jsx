import Left from "./section/Left";
import Main from "./section/Main";
import Right from "./section/Right";

function App() {
  return (
    <main className="flex w-ful font-poppins h-screen md:p-6">
      <div className="md:grid-cols-6 md:grid w-full shadow-2xl md:rounded-3xl overflow-scroll no-scrollbar">
        {/* Right */}
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
