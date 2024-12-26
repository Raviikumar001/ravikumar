import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <Projects />
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </>
  );
}

export default App;
