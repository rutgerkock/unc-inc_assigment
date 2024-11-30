import { Nav } from "./components/Nav"
import { Outlet } from "react-router-dom"

export function Layout({ auth, logout }) {
    return (
        <>
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