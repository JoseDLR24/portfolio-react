import TechCard from './techCard.jsx';

export default function FeaturedProject({ title, description, imgSrc, technologies }) {
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
            </div>
        </div>
    )
}
