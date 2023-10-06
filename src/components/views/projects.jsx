// importing FeaturedProjects component to pass props
import FeaturedProjects from '../ui/ftProjects/index.jsx';

// importing imgs
import RentalAppImg from '../../assets/rentalAppImg.jpg';
import SeeNSayImg from '../../assets/seeNSayImg.jpg';
import TheBookKeeperImg from '../../assets/theBookKeeperImg.jpg';


export default function Projects(){
    const rentalAppTechnologies = ['MongoDB', 'Express', 'React', 'Node.js', 'CSS'];
    const seeNSayTechnologies = ['HTML', 'CSS', 'JavaScript'];
    const theBookKeeperTechnologies = ['Handlebars', 'MongoDB', 'Express', 'Bootstrap'];

    return(
        <section className="comp-container">
            {/* content container */}
            <div className="content-container">
                {/* title container */}
                <div className="space-y-2 flex flex-col items-center justify-center">
                    <h2 className='text-3xl lg:text-4xl font-semibold'>Featured Projects</h2>
                    <hr className="border-2 border-teal-400 w-20"/>
                </div>                
            </div>
            <div className='content-container lg:w-screen items-start border border-black'>
                    <FeaturedProjects 
                    title={'Rental Housing Application'}
                    description={'This is the description of project 1'}
                    imgSrc={RentalAppImg}
                    technologies={rentalAppTechnologies}
                    />
                    <FeaturedProjects 
                    title={'See N Say Story Maker'}
                    description={'This is the description of project 2'}
                    imgSrc={SeeNSayImg}
                    technologies={seeNSayTechnologies}
                    />
                    <FeaturedProjects 
                    title={'The Book Keeper'}
                    description={'This web application is a book inventory system, built using essential CRUD functionality. It harnesses the capabilities of MongoDB for efficient data storage, Node.js for server-side processing, and Express.js for seamless web development. Is important to note that certain advanced functionalities are still in development, the core CRUD operations are fully implemented and operational, demonstrating a solid foundation in web application development'}
                    imgSrc={TheBookKeeperImg}
                    technologies={theBookKeeperTechnologies}
                    />
                </div>
        </section>
    )
}