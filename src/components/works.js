import Border from "./border"
import DescriptionLeft from "./descriptionLeft"
import DescriptionRight from "./descriptionRight"
import ImageRight from "./imageRight"
import ImageLeft from "./imageLeft"

function Works () {
    return (
        <div class="grid grid-cols-[1fr_2px_1fr] grid-rows-8 mt-14 gap-x-6">         
            <DescriptionLeft title="Where's Waldo" text="This was my final React project. The goal was to combine what I learned by using a React frontend and a Ruby on Rails backend working as an API. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="Ruby on Rails, React, API"/>
            <Border />
            <ImageRight link="https://tcoquery.github.io/REACT-Where-s-Waldo/" imgSrc="https://camo.githubusercontent.com/90603fdc6c63daa1acae383dcec1e5fdad37df32825d7b1cd5192439a8afbb10/68747470733a2f2f696d6775722e636f6d2f777a676a334c522e706e67" />
            <ImageLeft link="https://tcoquery.github.io/REACT-CV-Maker/" imgSrc="https://i.imgur.com/DxEHm4I.png" />
            <Border />
            <DescriptionRight title="CV Maker" text="This was my first React app, a simple resume builder. This was first done using class components and refactored later to use functional components. For the moment, there is no way to save or download the information entered, this app was mostly built as an introduction to React." tags="React"/>
            <DescriptionLeft title="To Do List" text="My implementation of a To-Do app with simple UI. This project uses local storage to store a user's projects and tasks. This was my first JavaScript project using ES6 modules" tags="JavaScript, ES6, Webpack"/>
            <Border />
            <ImageRight link="https://tcoquery.github.io/JS-To-Do-List/" imgSrc="https://i.imgur.com/NwzVVcv.png" />
            <ImageLeft link="https://tcoquery.github.io/JS-Battleship/" imgSrc="https://i.imgur.com/DPjobb5.png" />
            <Border />
            <DescriptionRight title="Battleship" text="A recreation of this classic game using ES6 modules and factory functions. The main issue came from having to create logic for the 'frontend', what the player sees, and the 'backend', what happens when a player clicks on a cell. This project took a lot of work and went through a number of revisions however I am quite proud of the final result." tags="JavaScript"/>
            <DescriptionLeft title="Facebook" text="This was the final project of the Ruby on Rails curriculum from The Odin Project. The goal was to recreate Facebook's functionalities including the possibility to add friends, create posts and comments. This project uses OmniAuth to enable users to sign in with their Facebook account and Gravatar." tags="Ruby on Rails"/>
            <Border />
            <ImageRight link="#" imgSrc="https://camo.githubusercontent.com/9bec6398f730eeca6a728c28d5f2cf4d6accefbb5380b1ba72c0179193b9ea01/68747470733a2f2f692e696d6775722e636f6d2f6f714a4c4759422e706e67" />
            <ImageLeft link="#" imgSrc="https://camo.githubusercontent.com/7bde7c7f32a3c7380821ad3debcac2157c8dddda75f79cf5b588b1a960362879/68747470733a2f2f692e696d6775722e636f6d2f497756684275492e706e67" />
            <Border />
            <DescriptionRight title="Flight Booker" text="This is a simple flight booking interface with Ruby on Rails. The flights are hardcoded into the database. The project's main purpose was to use nested attributes when entering passenger's information. It also sends confirmations emails." tags="Ruby on Rails"/>
            <DescriptionLeft title="Mastermind" text="Another iteration of a classic tabletop game using Ruby objects. It was probably one of the hardest project I worked on due to the amount of logic and interconnections involved. You can either try to solve the code or try to beat the computer." tags="Ruby, game, OOP"/>
            <Border />
            <ImageRight link="https://replit.com/@tcoquery/Mastermind?v=1" imgSrc="https://upload.wikimedia.org/wikipedia/commons/2/2d/Mastermind.jpg" />
            <ImageLeft link="https://replit.com/@tcoquery/Hangman?v=1" imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png" />
            <Border />
            <DescriptionRight title="Hangman" text="A simple hangman game that lets you guess a word based on a preestablished list. This project also allowed me to work on file saving and loading via YAML." tags="Ruby, game"/>
        </div>
    )
}



export default Works