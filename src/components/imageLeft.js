function ImageLeft (props) {
    return (
    <a href={props.link} class="bg-white w-5/6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-self-end mb-6 h-80 flex justify-center transition-all duration-300 hover:brightness-50">
        <img src={props.imgSrc} class="rounded-lg h-full " alt=""/>
    </a>
    );
  }
  
  export default ImageLeft
 
;
  