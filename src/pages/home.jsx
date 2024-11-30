
export function Home({ username }) {
    return (
      <h1>Welkom, {username || 'Gebruiker'}</h1>
    );
  }
  