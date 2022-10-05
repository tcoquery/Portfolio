import Border from "./border"
import DescriptionLeft from "./descriptionLeft"
import DescriptionRight from "./descriptionRight"
import ImageRight from "./imageRight"
import ImageLeft from "./imageLeft"

function Works () {
    return (
        <div class="grid grid-cols-[1fr_2px_1fr] grid-rows-8 mt-14 gap-x-6">         
            <DescriptionLeft title="Where's Waldo" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="Ruby on Rails, React, API"/>
            <Border />
            <ImageRight link="https://tcoquery.github.io/REACT-Where-s-Waldo/" imgSrc="https://camo.githubusercontent.com/90603fdc6c63daa1acae383dcec1e5fdad37df32825d7b1cd5192439a8afbb10/68747470733a2f2f696d6775722e636f6d2f777a676a334c522e706e67" />
            <ImageLeft link="https://tcoquery.github.io/REACT-CV-Maker/" imgSrc="https://i.imgur.com/DxEHm4I.png" />
            <Border />
            <DescriptionRight title="CV Maker" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend" tags="React"/>
            <DescriptionLeft title="To Do List" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="JavaScript, ES6, Webpack"/>
            <Border />
            <ImageRight link="https://tcoquery.github.io/JS-To-Do-List/" imgSrc="https://i.imgur.com/NwzVVcv.png" />
            <ImageLeft link="https://tcoquery.github.io/JS-Battleship/" imgSrc="https://i.imgur.com/DPjobb5.png" />
            <Border />
            <DescriptionRight title="Battleship" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend" tags="JavaScript"/>
            <DescriptionLeft title="Facebook" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="Ruby on Rails"/>
            <Border />
            <ImageRight link="#" imgSrc="https://camo.githubusercontent.com/9bec6398f730eeca6a728c28d5f2cf4d6accefbb5380b1ba72c0179193b9ea01/68747470733a2f2f692e696d6775722e636f6d2f6f714a4c4759422e706e67" />
            <ImageLeft link="#" imgSrc="https://camo.githubusercontent.com/7bde7c7f32a3c7380821ad3debcac2157c8dddda75f79cf5b588b1a960362879/68747470733a2f2f692e696d6775722e636f6d2f497756684275492e706e67" />
            <Border />
            <DescriptionRight title="Flight Booker" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend" tags="Ruby on Rails"/>
            <DescriptionLeft title="Mastermind" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="Ruby, game, OOP"/>
            <Border />
            <ImageRight link="https://replit.com/@tcoquery/Mastermind?v=1" imgSrc="https://upload.wikimedia.org/wikipedia/commons/2/2d/Mastermind.jpg" />
            <ImageLeft link="https://replit.com/@tcoquery/Hangman?v=1" imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png" />
            <Border />
            <DescriptionRight title="Hangman" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend" tags="Ruby, game"/>
        </div>
    )
}



export default Works