import { Routes, Route} from 'react-router-dom';
import { Initial } from '../Pages/Initial';
import { AboutMe } from '../Pages/AboutMe';
import { Projects } from '../Pages/Projects';

export function AppRoutes(){
    return(
        <Routes>
            <Route path = '/' element = { <Initial /> }/>
            <Route path = '/about' element = { <AboutMe />}/>
            <Route path = '/projects' element = { <Projects /> }/>
        </Routes>
    )
}