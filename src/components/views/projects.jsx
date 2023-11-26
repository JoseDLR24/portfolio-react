// importing FeaturedProjects component to pass props
import FeaturedProjects from '../ui/ftProjects/index.jsx';

// importing imgs
import RentalAppImg from '../../assets/rentalAppImg.jpg';
import SeeNSayImg from '../../assets/seeNSayImg.jpg';
import GameHarbourImg from '../../assets/gameHarbourImg.jpg';


export default function Projects(){
    const rentalAppTechnologies = ['MongoDB', 'Express', 'React', 'Node.js', 'CSS'];
    const seeNSayTechnologies = ['HTML', 'CSS', 'JavaScript'];
    const gameHarbourTechnologies = ['React', 'React-Router', 'DaisyUI', 'TailwindCSS'];

    return(
        <section id='projects' className="comp-container lg:space-y-5">
            {/* content container */}
            <div className="content-container pb-6 lg:items-start">
                {/* title container */}
                <div className="space-y-2 flex flex-col items-center justify-center lg:items-start">
                    <h2 className='text-3xl lg:text-4xl font-semibold'>Featured Projects</h2>
                    <hr className="border-2 border-teal-400 w-20"/>
                </div>                
            </div>
            <div className='content-container lg:w-screen items-start space-y-5'>
                    <FeaturedProjects 
                    title={'Rental Housing Application'}
                    description={'This project was a collaborative team effort aimed at enabling CCSI to efficiently collect data from their chosen rental websites. Its primary goal is to support the creation of accurate housing status reports for Simcoe County. Currently, data is extracted from three key sources: Shoreline Property Management, AG Secure Property Management, and Listanza.'}
                    imgSrc={RentalAppImg}
                    technologies={rentalAppTechnologies}
                    liveSiteLink={'https://rentalapp-6cca3.web.app/'}
                    gitRepoLink={'https://github.com/JoseDLR24/rental-app-client'}
                    />
                    <FeaturedProjects 
                    title={'See N Say Story Maker'}
                    description={'A simple but an interactive online storytelling tool with five categories, each offering 6-7 word options. Craft your unique story by selecting words, add a twist with Randomize, or start fresh with Restart.'}
                    imgSrc={SeeNSayImg}
                    technologies={seeNSayTechnologies}
                    liveSiteLink={'https://see-n-say-story-maker.vercel.app/'}
                    gitRepoLink={'https://github.com/JoseDLR24/SeeNSayStoryMaker'}
                    />
                    <FeaturedProjects 
                    title={'Game Harbour'}
                    description={'API endpoints integration working with React Router. Utilizing query parameters for URL customization, the platform dynamically adapts to user preferences. This project showcases my expertise in fetching and displaying detailed game information efficiently. With advanced filtering option based on genre'}
                    imgSrc={GameHarbourImg}
                    technologies={gameHarbourTechnologies}
                    liveSiteLink={'https://game-harbour.vercel.app/'}
                    gitRepoLink={'https://github.com/JoseDLR24/Game-Harbour'}
                    />
                </div>
        </section>
    )
}