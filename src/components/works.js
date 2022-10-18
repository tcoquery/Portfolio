import Border from "./border"
import DescriptionLeft from "./descriptionLeft"
import DescriptionRight from "./descriptionRight"
import ImageRight from "./imageRight"
import ImageLeft from "./imageLeft"
import ImageMobile from "./imageMobile"
import battleship from "../img/battleship.webp";
import waldo from "../img/waldo.webp";
import facebook from "../img/facebook.webp";
import flightbooker from "../img/flightbooker.webp";
import todolist from "../img/todolist.webp";
import mastermind from "../img/mastermind.webp"
import hangman from "../img/hangman.png"
import cv from "../img/cv.webp"

function Works () {
    return (
        <div class=" flex flex-col justify-center items-center md:items-start md:grid md:grid-cols-[1fr_2px_1fr] grid-rows-8 mt-14 gap-x-6">         
            <DescriptionLeft title="Where's Waldo" text="This was my final React project. The goal was to combine a React frontend and a Ruby on Rails backend working as an API. Using Axios, the frontend communicates with the backend seamlessly. One of the main difficulties was to ensure that character coordinates was consistent accross different window sizes." tags="Ruby on Rails, React, API, Axios, Heroku, PostgreSQL"/>
            <Border />
            <ImageRight imgSrc={waldo} height="320" width="620" alt="Where's Waldo React project screenshot" link="https://tcoquery.github.io/REACT-Where-s-Waldo/" source="https://github.com/tcoquery/REACT-Where-s-Waldo"/>
            <ImageLeft imgSrc={cv} height="320" width="620" alt="CV Builder React project screenshot" link="https://tcoquery.github.io/REACT-CV-Maker/" source="https://github.com/tcoquery/REACT-CV-Maker"/>
            <Border />
            <DescriptionRight title="CV Maker" text="This was my first React app, a simple resume builder. This was first done using class components and refactored later to use functional components. This project taught me a lot about handling multiple inputs while saving them to state. " tags="React" />
            <ImageMobile imgSrc={cv} height="320" width="620" alt="CV Builder React project screenshot" link="https://tcoquery.github.io/REACT-CV-Maker/" source="https://github.com/tcoquery/REACT-CV-Maker"/>
            <DescriptionLeft title="To Do List" text="My implementation of a To-Do app with simple UI. This project uses local storage to store a user's projects and tasks. The challenge here was to make sure tasks were save in their corresponding project which was done using customs data attributes . This was my first JavaScript project using ES6 modules" tags="JavaScript, ES6, Webpack"  />
            <Border />
            <ImageRight imgSrc={todolist} height="320" width="620" alt="To Do list Javascript project screenshot" link="https://tcoquery.github.io/JS-To-Do-List/" source="https://github.com/tcoquery/JS-To-Do-List"/>
            <ImageLeft imgSrc={battleship} height="320" width="620" alt="Battleship Javascript project screenshot" link="https://tcoquery.github.io/JS-Battleship/" source="https://github.com/tcoquery/JS-Battleship"/>
            <Border />
            <DescriptionRight title="Battleship" text="A recreation of this classic game using ES6 modules and factory functions. I had to create a pseudo frontend and backend to distinguish between the player interface and the game logic, each with its own set of challenges. I spent a lot of time working on ship placement as I had to check for a number of conditions for a position to be valid as well as implementing visual feedback for the player." tags="JavaScript"  />
            <ImageMobile imgSrc={battleship} height="320" width="620" alt="Battleship Javascript project screenshot" link="https://tcoquery.github.io/JS-Battleship/" source="https://github.com/tcoquery/JS-Battleship"/>
            <DescriptionLeft title="Facebook" text="This was my final Ruby on Rails project. The goal was to recreate Facebook's functionalities including the possibility to add friends, create posts and comments. This project uses OmniAuth to enable users to sign in with their Facebook account and Gravatar. While clicking a like button seems like one of the most natural thing to do on the Internet these days, it certainly isn't easy to implement the first time (thank you Google). " tags="Ruby on Rails, OmniAuth, API, Heroku" />
            <Border />
            <ImageRight imgSrc={facebook} height="320" width="620" alt="Facebook Ruby on Rails project screenshot" link="https://hidden-reaches-89907.herokuapp.com/" source="https://github.com/tcoquery/RAILS-Facebook"/>
            <ImageLeft imgSrc={flightbooker} height="320" width="620" alt="Flight Booker Ruby on Rails project screenshot" link="https://pure-meadow-40783.herokuapp.com/" source="https://github.com/tcoquery/RAILS-Flight-booker"/>
            <Border />
            <DescriptionRight title="Flight Booker" text="This is a simple flight booking interface with Ruby on Rails. The flights are hardcoded into the database. The project's main purpose was to use nested attributes when entering passenger's information. It also sends confirmations emails." tags="Ruby on Rails, PostgreSQL"  />
            <ImageMobile imgSrc={flightbooker} height="320" width="620" alt="Flight Booker Ruby on Rails project screenshot" link="https://pure-meadow-40783.herokuapp.com/" source="https://github.com/tcoquery/RAILS-Flight-booker"/>
            <DescriptionLeft title="Mastermind" text="Another iteration of a classic tabletop game using Ruby objects. I spent way too much time scratching my head over bugs that I had no idea where they came from (said every programmer ever). After this project, arrays are now best friends. " tags="Ruby, game, OOP" />
            <Border />
            <ImageRight imgSrc={mastermind} height="320" width="620" alt="Mastermind Ruby project screenshot" link="https://replit.com/@tcoquery/Mastermind?v=1" source="https://github.com/tcoquery/RUBY-Mastermind"/>
            <ImageLeft imgSrc={hangman} alt="Hangman Ruby project screenshot" link="https://replit.com/@tcoquery/Hangman?v=1" source="https://github.com/tcoquery/RUBY-Hangman"/>
            <Border />
            <DescriptionRight title="Hangman" text="A simple hangman game that lets you guess a word based on a preestablished list. This one came right after Mastermind so it was much easier to implement and a lot more fun. This project also allowed me to work on file saving and loading via YAML." tags="Ruby, game"  />
            <ImageMobile imgSrc={hangman} alt="Hangman Ruby project screenshot" link="https://replit.com/@tcoquery/Hangman?v=1" source="https://github.com/tcoquery/RUBY-Hangman"/>
        </div>
    )
}



export default Works