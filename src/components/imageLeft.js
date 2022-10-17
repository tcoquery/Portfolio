function ImageLeft (props) {
    return (
      <div class="hidden md:flex flex-col justify-self-end w-full md:w-5/6">
        <a href={props.link} class=" bg-white md:w-full rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-end mb-2 h-80 justify-center">
          <img src={props.imgSrc} class="rounded-lg h-full" alt={props.alt} height={props.height} width={props.width}/>
        </a>
        <p class="text-sm text-gray-600 pb-2">Source code:&nbsp; 
          <a class="underline" href={props.source}>{props.source}</a>
        </p>
      </div>

    );
  }
  
  export default ImageLeft
 
;
  