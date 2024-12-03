import { Nav } from "./components/Nav"
import { Outlet } from "react-router-dom"

document.title = 'Unc Inc Opdracht'

export function Layout({ auth, logout }) {
    return (
        <>
            <head>
                <meta name="description" content="Unc Inc Opdracht voor sollicitatie stage" />
            </head>

            <Nav auth={auth} logout={logout} />
            <main>
                <div className="top_text">
                    <p>Rutger Kock</p>
                    <p>11/2024</p>
                </div>
                <Outlet />
            </main>
        </>
    )
}