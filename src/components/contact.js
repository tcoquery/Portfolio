import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {
    return (
        <div class="flex flex-col items-center">
            <p class="text-3xl">Contact me</p>
            <div class="flex items-center justify-around text-2xl mt-6 w-80">
                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:tcoquery@gmail.com" class="ml-2 hover:text-blue-700">Email</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/tom-coquery/" class="ml-2 hover:text-blue-700">Linkedin</a>
                </div>
            </div>
        </div>
    );
}

export default Contact