import { Routes, Route} from 'react-router-dom';
import { Home } from '../Pages/Home';
import { AboutMe } from '../Pages/AboutMe';
import { Projects } from '../Pages/Projects';

export function AppRoutes(){
    return(
        <Routes>
            <Route path = '/' element = { <Home /> }/>
            <Route path = '/about' element = { <AboutMe />}/>
            <Route path = '/projects' element = { <Projects /> }/>
        </Routes>
    )
}