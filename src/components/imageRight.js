function ImageRight (props) {
    return (
      <div class="w-5/6 md:w-full">
        <a href={props.link} class="bg-white md:w-5/6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-start mb-2 h-80 flex justify-center ">
            <img src={props.imgSrc} class="w-full rounded-lg h-full " alt={props.alt} height="320" width="620"/>
        </a>
        <p class="text-sm text-gray-600 pb-2">Source code:&nbsp;
          <a class="underline" href={props.source}>{props.source}</a>
        </p>
      </div>
    );
  }
  
  export default ImageRight 
;
  