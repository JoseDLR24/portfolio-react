// import Button component
import Button from '../ui/buttons/button';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

// importing the programming languages icons component
import ProgrammingLanguages from '../ui/techStack/index.jsx';

export default function Skills(){
    return(
        // component container
        <section className='comp-container min-h-fit space-y-5 mt-12'>
            {/* content container */}
            <div className='content-container space-y-4 md:items-start'>
                <div className='space-y-2 flex flex-col items-center justify-center'>
                    <h2 className='text-3xl lg:text-4xl font-bold flex items-center space-x-2'> <FontAwesomeIcon icon={faGear}/> <span>Skills</span></h2>
                    <hr className='hr'/>
                </div>
                {/* tab btn container */}
                <div className='flex flex-row space-x-5'>
                    <div className='border border-blueblack p-3 rounded-xl space-x-3 flex flex-row items-center'>
                        <FontAwesomeIcon icon={faMicrochip} />
                        <Button content={'Tech Stack'}/>
                    </div>
                    <div className='border border-blueblack p-3 rounded-xl space-x-3 flex flex-row items-center'>
                        <FontAwesomeIcon icon={faToolbox}/>
                        <Button content={'Tools'}/>
                    </div>
                </div>
            </div>
            <div className='content-container items-start text-left'>
                {/* skills icon component */}
                <ProgrammingLanguages />
            </div>
        </section>
    )
}