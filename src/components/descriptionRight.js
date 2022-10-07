function DescriptionRight (props) {
    return (
      <div class="flex flex-col w-5/6 justify-self-start">            
        <a href={props.link} class="text-2xl text-red-800 font-semibold text-left mb-6">{props.title}</a>
        <p class="text-left text-lg border-b pb-4 border-gray-400">{props.text}</p>
        <p class="text-sm text-right text-gray-600 pt-2">{props.tags}</p>
      </div>
    );
  }
  
  export default DescriptionRight
 
;
  