function ImageRight (props) {
    return (
    <div class="bg-white w-5/6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-start mb-6 h-80 flex justify-center transition-all duration-300">
        <img src={props.imgSrc} class="w-auto rounded-lg h-full " alt={props.alt} height="320" width="620"/>
    </div>
    );
  }
  
  export default ImageRight 
;
  