import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';

const App = () => {
    return (
        <>
            <Home name={"Jose De Los Reyes"} occupation={"Web Developer & Designer"}/>
            <About />
            <Skills />
        </>
    )
}

export default App;