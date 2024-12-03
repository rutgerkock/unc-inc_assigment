import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export function Login({ login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 


    // SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'uncinc' && password === 'letmein') {
            login(username, password); 
            navigate("/dashboard"); 
        } else {
            alert('Ongeldige gegevens!');
        }
    }

    // HTML

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Gebruikersnaam *
                <input
                    type="text"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                </label>
                <label>Wachtwoord *
                <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                <button type="submit">Login</button>
            </form>
        </section>

    )
}
