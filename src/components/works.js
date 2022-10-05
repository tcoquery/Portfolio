import Border from "./border"
import DescriptionLeft from "./descriptionLeft"
import DescriptionRight from "./descriptionRight"
import ImageRight from "./imageRight"
import ImageLeft from "./imageLeft"

function Works () {
    return (
            <div class="grid grid-cols-[1fr_2px_1fr] grid-rows-2 mt-14 gap-x-6">         
                <DescriptionLeft title="Where's Waldo" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend." tags="Ruby on Rails, React, API"/>
                <Border />
                <ImageRight link="https://tcoquery.github.io/REACT-Where-s-Waldo/" imgSrc="https://camo.githubusercontent.com/90603fdc6c63daa1acae383dcec1e5fdad37df32825d7b1cd5192439a8afbb10/68747470733a2f2f696d6775722e636f6d2f777a676a334c522e706e67" />
                <ImageLeft link="https://tcoquery.github.io/REACT-Memory-cards/" imgSrc="https://i.imgur.com/fJbsJ1o.png" />
                 <Border />
                <DescriptionRight title="Memory Cards" text="This was the final project of the REACT curriculum from The Odin Project. The goal was to use React for the frontend and Ruby on Rails as an api for the backend. The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character. When the player finds all characters, he can enter his name which is stored in the backend" tags="React"/>
            </div>
    )
}



export default Works