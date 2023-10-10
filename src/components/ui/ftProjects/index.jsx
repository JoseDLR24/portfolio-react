import TechCard from './techCard.jsx';
import IconButton from '../buttons/iconButton.jsx'

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedProject({ title, description, imgSrc, technologies, liveSiteLink  }) {
    return (
        <div className="md:w-full flex flex-col lg:flex-row-reverse">
            {/* img container */}
            <div className="rounded-xl my-5 w-full">
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
                <div className='text-left lg:w-10/12'>
                    <p>{description}</p>
                </div>
                {/* btn container */}
                <div className='border border-orange-500'>
                    <IconButton icon={faUpRightFromSquare} link={liveSiteLink} desc={'Live Site:'} content={'Live Site'} />
                </div>
            </div>
        </div>
    )
}
