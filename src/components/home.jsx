// importing components
import Button from './ui/buttons/button';

// importing font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// importing undraw svg illustrations
import undrawImg from '../assets/images/undraw_developer.svg';


export default function Home({name, occupation}) {
    return(
        <section className="min-h-screen flex flex-col items-center justify-center">
            {/* card container */}
            <div className="flex flex-col items-center justify-center rounded-xl w-96 text-center h-60 pb">
                <p className="text-sm py-2 text-gray-600">Hello World, I'm</p>
                {/* user name */}
                <h2 className="text-4xl font-bold">{name}</h2>
                {/* user occupation */}
                <h1 className="text-xl py-2">{occupation}</h1>
                {/* btn container */}
                <div className='flex flex-row justify-center space-x-6 py-4'>
                    <div className='border border-black rounded-xl p-3 space-x-2 cursor-pointer'>
                        <FontAwesomeIcon icon={faDownload} />
                        <Button 
                        link={""} 
                        content={"Resume"} 
                        desc={"View my resume"}/>
                    </div>
                    <div className='border border-black rounded-xl p-3 space-x-2'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Button 
                        link={""}
                        content={"Contact"}
                        desc={"Contact me"}
                        />
                    </div>
                </div>
            </div>
            <div className='w-72'>
                <img src={undrawImg} alt="svg img" />
            </div>
        </section> 
    )
}