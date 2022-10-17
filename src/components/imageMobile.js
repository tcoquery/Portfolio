function ImageMobile (props) {
    return (
      <div class="w-5/6 md:hidden">
        <a href={props.link} class="flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-end mb-2 h-80 flex justify-center">
          <img src={props.imgSrc} class="rounded-lg h-full" alt={props.alt} height={props.height} width={props.width}/>
        </a>
        <p class="text-sm text-gray-600 pb-2">Source code:&nbsp; 
          <a class="underline" href={props.source}>{props.source}</a>
        </p>
      </div>
    );
  }
  
  export default ImageMobile
 
;
  