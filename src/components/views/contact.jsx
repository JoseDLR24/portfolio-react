import Lottie from "lottie-react";
import contactAnimation from "../../assets/contact-animation.json";

import IconButton from '../ui/buttons/iconButton.jsx';
import Icon from '../ui/buttons/icon.jsx';
import { faLinkedin, faGithub } from  '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact(){
    return(
        <section id="contact" className="comp-container min-h-fit mt-10 py-10 bg-blueblack text-white">
            {/* content container */}
            <div className="content-container rounded-xl border-teal-400 p-6 lg:flex-row md:justify-between lg:py-0 ">
                <div className="space-y-4 flex flex-col justify-center md:items-start">
                    <div className="flex flex-col items-center space-y-2 md:items-start">
                        <h2 className="text-3xl lg:text-4xl font-semibold">Contact me!</h2>
                        <hr className="border-2 border-teal-400 w-20"/>
                    </div>
                    <p className="text-left md:text-lg">Have a question, a project idea, or just want to say hi? I'd love to hear from you! Feel free to reach out, and I'll get back to you as soon as possible. Let's chat and make things happen!</p>
                    <div className="w-full flex flex-row items-center justify-center space-x-4 pt-2 md:text-xl md:justify-start">
                        {/* LINKEDIN ICON */}
                        <div className="rounded-lg p-2 hover:bg-teal-400 hover:text-blueblack transition duration-300">
                            <Icon icon={faLinkedin} link={'https://www.linkedin.com/in/josedvosorio/'}/>
                        </div>
                        {/* EMAIL ICON */}
                        <div className="rounded-lg p-2 hover:bg-teal-400 hover:text-blueblack transition duration-300">
                            <Icon icon={faEnvelope} link={'mailto:jdlrosorio23@gmail.com'}/>
                        </div>
                        {/* GITHUB ICON */}
                        <div className="rounded-lg p-2 hover:bg-teal-400 hover:text-blueblack transition duration-300">
                            <Icon icon={faGithub} link={'https://github.com/JoseDLR24'}/>
                        </div>
                    </div>
                </div>
                {/* ANIMATION CONTAINER */}
                <div className="lg:w-11/12">
                    <Lottie  animationData={contactAnimation}/>
                </div>
            </div>
        </section>
    )
}