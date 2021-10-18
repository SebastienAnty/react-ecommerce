import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{display: 'flex', justifyContent: 'space-evenly', padding: '1em'}}>
            <NavLink exact to ='/'>Home</NavLink>
            <NavLink exact to ='/clothes'>Clothes</NavLink>
            <NavLink exact to ='/coffee'>Coffee</NavLink>
            <NavLink exact to ='/add'>Add</NavLink>
        </nav>
    )
}
