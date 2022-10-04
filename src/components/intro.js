import background from "../img/background.jpg";

function Intro() {
    return (
    <div style={{backgroundImage: `url(${background})`}} class="h-screen">
        <div class="px-2 text-white dark:bg-gray-900 dark:border-gray-700bg-white sm:px-4 py-4 dark:bg-gray-900  w-full flex justify-around">
            <p class="py-4 text-3xl ml-3 font-bold font-mplus">Tom Coquery</p>
            <div>
                <button class="py-4 text-2xl text-white font-mplus mr-8">Works</button>
                <button class="py-4 text-2xl text-white font-mplus mr-8">About</button>
                <button class="py-4 text-white text-2xl font-mplus">Contact</button>
            </div>
        </div>        
        <div class="flex flex-col container justify-center items-center mx-auto h-3/4">
            <p class="font-mplus text-4xl text-white">Welcome. <br/><br/>My name is Tom, I'm a web developer based in Paris.</p>
        </div>
    </div>
    );
  }
  
  export default Intro;
  