import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active">
                        <button>Home</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" activeclassname="active" >
                        <button>Inloggen</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeclassname="active" >
                        <button>Dashboard</button>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}