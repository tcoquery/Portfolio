import Intro from "./components/intro"
import WorkIntro from "./components/workIntro";
import Works from "./components/works";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <Intro />
      <div class="container mx-auto mt-20">
        <WorkIntro />
        <Works />
        <div class="flex w-full justify-center mt-14 text-2xl">
          <p>You can find more of my projects on my <a href="https://github.com/tcoquery" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">GitHub</a>
          <FontAwesomeIcon icon={faGithub} />
          </p>
        </div>
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <About />
        <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
