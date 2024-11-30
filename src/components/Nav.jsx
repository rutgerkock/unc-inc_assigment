import { NavLink } from "react-router-dom";

export function Nav({ logout, auth }) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="active">
                        <button>Home</button>
                    </NavLink>
                </li>
                {!auth ? (
                    <li>
                        <NavLink to="/login" activeclassname="active">
                            <button>Inloggen</button>
                        </NavLink>
                    </li>
                ) : (
                    <li>
                        <button onClick={logout}>Uitloggen</button>
                    </li>
                )}
                {auth && (
                    <li>
                        <NavLink to="/dashboard" activeclassname="active">
                            <button>Dashboard</button>
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}
