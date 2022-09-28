import {NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';
export function Navbar(){

    return(
        <>
            {/* <h1 style={{color:'red'}}>abc</h1> */}
            {/* <Link to='/'>Home</Link>
            <Link to='/cart'>Cart</Link> */}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
        </>
    )
}