// import Button component
import Button from '../ui/buttons/button';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

// importing the programming languages icons component
import ProgrammingLanguages from '../ui/techStack/index.jsx';
import Tools from '../ui/toolStack/index.jsx';

export default function Skills(){
    return(
        // component container
        <section id='skills' className='comp-container min-h-fit space-y-5 my-24'>
            {/* content container */}
            <div className='content-container md:items-start'>
                <div className='space-y-2 flex flex-col items-center justify-center md:items-start'>
                    <h2 className='text-3xl lg:text-4xl font-semibold'>Skills</h2>
                    <hr className="border-2 border-teal-400 w-20"/>
                </div>
            </div>
            <div className='content-container items-start text-left'>
                {/* skills icon tools */}
                <Tools />
            </div>
            <div className='content-container items-start text-left'>
                {/* skills icon techstack component */}
                <ProgrammingLanguages />
            </div>
        </section>
    )
}