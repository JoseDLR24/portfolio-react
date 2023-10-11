// importing components
import Button from '../ui/buttons/button';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// importing undraw svg illustrations
import undrawImg from '../../assets/undraw_developer.svg';


export default function Home({name, occupation}) {
    return(
        <section id='home' className="comp-container">
            {/* content container */}
            <div className="content-container lg:flex-row lg:text-left lg:justify-between">
                <div className='h-60 pb-4'>
                    <p className="text-base lg:text-lg py-2 text-gray-600">Hello World, I'm</p>
                    {/* user name */}
                    <h2 className="text-4xl lg:text-5xl font-bold">{name}</h2>
                    {/* user occupation */}
                    <h1 className="text-xl font-semibold lg:text-2xl py-2">{occupation}</h1>
                    {/* btn container */}
                    <div className='flex flex-row justify-center lg:justify-start space-x-6 py-4'>
                        <div className='btn-primary'>
                            <FontAwesomeIcon icon={faDownload} />
                            <Button 
                            link={""} 
                            content={"Resume"} 
                            desc={"View my resume"}/>
                        </div>
                        <div className='btn-primary'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Button 
                            link={""}
                            content={"Contact"}
                            desc={"Contact me"}
                            />
                        </div>
                    </div>
                </div>
                {/* img container */}
                <div className='w-72 md:w-80 lg:w-96'>
                    <img src={undrawImg} alt="svg img" />
                </div>
            </div>            
        </section> 
    )
}