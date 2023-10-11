import TechCard from './techCard.jsx';
import IconButton from '../buttons/iconButton.jsx'

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function FeaturedProject({ title, description, imgSrc, technologies, liveSiteLink, gitRepoLink  }) {
    return (
        <div className="md:w-full flex flex-col lg:flex-row-reverse">
            {/* img container */}
            <div className="rounded-xl my-5 lg:w-9/12">
                <img src={imgSrc} alt={title} className="rounded-xl shadow-lg" />
            </div>
            <div className="text-left lg:w-11/12">
                <h2 className="font-bold text-xl lg:text-2xl">{title}</h2>
                <div className='flex flex-wrap space-x-3 py-2'>
                    {technologies.map((technology, index) => (
                        <TechCard key={index} technology={technology} />
                    ))}
                </div>
                {/* description container */}
                <div className='text-left '>
                    <p className='mr-10'>{description}</p>
                </div>
                {/* btn container */}
                <div className='flex flex-row space-x-7 text-sm py-5'>
                    <div className='border-b-4 border-teal-400 p-3 px-1'>
                        <IconButton icon={faUpRightFromSquare} link={liveSiteLink} desc={'Live Site:'} content={'Live Site'} />
                    </div>
                    <div className='border-2 border-blueblack p-3 rounded-lg'>
                        <IconButton icon={faGithub} link={gitRepoLink} desc={'Github Repo'} content={'Github Repo'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
