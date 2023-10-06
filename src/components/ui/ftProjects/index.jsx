import TechCard from './techCard.jsx';

export default function FeaturedProject({ title, description, imgSrc, technologies }) {
    return (
        <div className="md:w-full flex flex-col lg:flex-row-reverse lg:justify-end border border-red-400 md:border-blue-600 lg:border-orange-600">
            {/* img container */}
            <div className="rounded-xl my-5 shadow-lg w-80">
                <img src={imgSrc} alt={title} className="rounded-xl" />
            </div>
            <div className="text-left">
                <h2 className="font-bold text-xl">{title}</h2>
                <div className='flex flex-wrap space-x-3 py-2'>
                    {technologies.map((technology, index) => (
                        <TechCard key={index} technology={technology} />
                    ))}
                </div>
                {/* description container */}
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
