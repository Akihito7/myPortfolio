import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";

export function RoutesX(){

    return(
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
    )
}