import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

export default function Navbar() {
    const { user } = useContext(AuthContext)
    return (
        <nav style={{display: 'flex', justifyContent: 'space-evenly', padding: '1em'}}>
            <NavLink exact to ='/'>Home</NavLink>
            <NavLink exact to ='/clothes'>Clothes</NavLink>
            <NavLink exact to ='/coffee'>Coffee</NavLink>
            {user
                ? <NavLink exact to ='/add'>Add</NavLink>
                : <NavLink exact to ='/login'>Login</NavLink>
            }
        </nav>
    )
}
