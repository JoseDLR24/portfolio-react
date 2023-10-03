import Home from './components/views/home.jsx';
import About from './components/views/about.jsx';
import Skills from './components/views/skills.jsx';
import Projects from './components/views/projects.jsx';

export default function App() {
    return (
        <>
            <Home name={"Jose De Los Reyes"} occupation={"Web Developer & Designer"}/>
            <About />
            <Skills />
            <Projects />
        </>
    )
}