import { Route } from "react-router-dom"
import Galery from "../galery/galerypage"
import Home from "../galery/home"

const AllRoutes = ()=>{
    return (
        <>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/galery">
                <Galery/>
            </Route>
        </>
    )
}
export default AllRoutes