import Intro from "./components/intro"
import WorkIntro from "./components/workIntro";
import Works from "./components/works";


function App() {
  return (
    <div>
      <Intro />
      <div class="container mx-auto mt-20">
        <WorkIntro />
        <Works />
      </div>
    </div>
  );
}

export default App;
