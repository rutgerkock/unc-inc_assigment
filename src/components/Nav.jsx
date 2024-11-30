import { Link } from "react-router-dom"

export function Nav() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/login">
                <button>Inloggen</button>
            </Link>
            <Link to="/dashboard">
                <button>Dashboard</button>
            </Link>
        </>
    )
}