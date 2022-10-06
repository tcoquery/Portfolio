import background from "../img/background.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

function Intro() {

    const workDiv = document.getElementById("work-div");
    const aboutDiv = document.getElementById("about-div");
    const contactDiv = document.getElementById("contact-div");

    const createDot = (elem, id) => {
        const dot = document.createElement("div");
        dot.textContent = ".";
        dot.id = id;
        dot.classList.add("text-5xl");
        dot.classList.add("leading-[0rem]");
        elem.appendChild(dot);
    }

    const removeDot = (id) => {
        const dot = document.getElementById(id);
        dot.remove();
    }
 
    

    return (
    <div style={{backgroundImage: `url(${background})`}} class="h-screen">
        <div class="px-2 text-white dark:bg-gray-900 dark:border-gray-700bg-white sm:px-4 py-4 dark:bg-gray-900  w-full flex justify-around">
            <p class="py-4 text-3xl ml-3 font-bold font-mplus">Tom Coquery</p>
            <div class="flex">
                <div class="py-4 mr-8 flex flex-col items-center justify-center" id="work-div">
                    <a href="#works" class="text-2xl text-white font-mplus z-10" onMouseOver={()=> createDot(workDiv, "work-dot")} onMouseOut={() => removeDot( "work-dot")}>Works</a>
                </div>
                <div class="py-4 mr-8 flex flex-col items-center justify-center" id="about-div">
                    <a href="#about"class="text-2xl text-white font-mplus z-10" onMouseOver={()=> createDot(aboutDiv, "about-dot")} onMouseOut={() => removeDot( "about-dot")}>About</a>
                </div>
                <div class="py-4 flex flex-col items-center justify-center" id="contact-div">
                    <a href="#contact" class="text-white text-2xl font-mplus z-10" onMouseOver={()=> createDot(contactDiv, "contact-dot")} onMouseOut={() => removeDot( "contact-dot")}>Contact</a>
                </div>
            </div>
        </div>        
        <div class="flex flex-col container justify-center items-center mx-auto h-3/4">
            <p class="font-mplus text-4xl text-white">Welcome. <br/><br/>My name is Tom, I'm a web developer based in Paris.</p>
        </div>
        <div class="flex justify-center bottom-4 absolute w-full h-10">
            <FontAwesomeIcon icon={faAnglesDown} class="text-white animate-bounce h-full"/>
        </div>
    </div>
    );
  }
  
  export default Intro;
  