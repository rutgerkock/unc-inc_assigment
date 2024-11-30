
export function Home({ username }) {
    return (
      <h1 className="home">Welkom, {username || 'Gebruiker'}</h1>
    );
  }
  