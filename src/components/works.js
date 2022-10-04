function Works () {
    return (
            <div class="grid grid-cols-[1fr_2px_1fr] grid-rows-2 mt-14">
                <div class="flex flex-col w-4/6 justify-self-end pr-6">            
                    <h3 class="text-2xl text-red-800 font-semibold text-right mb-6">Where's Waldo</h3>
                    <p class="text-right border-b pb-4 border-gray-400">
                        This was the final project of the REACT curriculum from The Odin Project.
        
                        The goal was to use React for the frontend and Ruby on Rails as an api for the backend.
                        
                        The backend stores the coordinates for the characters of each puzzle. When the player clicks on the image, it checks the coordinates against the database to determine whether the player found a character.
                        
                        When the player finds all characters, he can enter his name which is stored in the backend, along with his score.
                    </p>
                    <p class="text-sm text-gray-600 pt-2">Ruby on Rails, React, API</p>
                </div>
                <div class="h-full bg-gray-300 w-0.5 row-span-2 mx-4 justify-self-center"></div>
                <a href="https://tcoquery.github.io/REACT-Where-s-Waldo/" class="ml-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-start">
                    <img src="https://camo.githubusercontent.com/90603fdc6c63daa1acae383dcec1e5fdad37df32825d7b1cd5192439a8afbb10/68747470733a2f2f696d6775722e636f6d2f777a676a334c522e706e67" class="rounded-lg transition-all duration-300 hover:brightness-50 "alt=""/>
                </a>
            </div>
    )
}



export default Works