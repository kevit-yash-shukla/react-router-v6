import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="container text-center mt-3">
                <NavLink  className="btn btn-primary" to="/">Home</NavLink>
                <br/><br/>
                <NavLink  className="btn btn-success" to="/about">About</NavLink>
                <br/><br/>
                <NavLink  className="btn btn-warning" to="/contact">Contact</NavLink>
                <br/>
                <br/>
                <NavLink  className="btn btn-info" to="/post">Post</NavLink>
                <br/>
                <br/>
           </div>
        </>
    )

}

export default Navbar