import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {
    return (
        <div class="flex flex-col items-center" id="contact">
            <p class="text-3xl">Contact me</p>
            <div class="flex flex-col md:flex-row items-center justify-around text-2xl mt-6 w-1/3">
                <div class="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:tcoquery@gmail.com" class="ml-2 hover:text-blue-700">tcoquery@gmail.com</a>
                </div>
                <div class="flex items-center">
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/tom-coquery/" class="ml-2 hover:text-blue-700">Linkedin</a>
                </div>
            </div>
        </div>
    );
}

export default Contact