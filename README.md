# Unc Inc Assessment - React routing
This is an assessment to implement a React app with several pages that can be accessed by URL paths in your browser. Some of these routes are accessible anonymously, while others can only be accessed after a user is logged in. We also want you to showcase your frontend skills by implementing page transitions and animations for a e.g the menu

## Technical requirements

- React, v17 or higher.
- Use yarn, not npm.
- You can use Typescript, or 'regular' JavaScript, whichever you prefer.
- You can use a project generator like Create React App (or alike).
- Use Git, send us the repository by making a git bundle, a ZIP file, or just share an online link to the repo.
- The code needs to adhere to the standard React and Airbnb standards.
- Use whatever editor or IDE you prefer.

## General requirements

- Start your project by writing down a small plan, and share this with us.
- Keep track of your progress using separate git commits with useful commit messages.
- Choose external packages wisely. Do not write unnecessary code yourself.
- This assessment does not cover a backend to communicate with. Some things can be hard-coded.

## Functional requirements

- As a regular user, I want to be able to access the homepage on either / or /home.
- As a regular user, I want to be able to login using a form on /login with username "uncinc" and password "letmein" in order to become a logged in user.
- As a regular user, I want to get a message if I fill out wrong credentials.
- As a logged in user, I want to be able to access a dashboard on /dashboard.
- As a regular user, I want to access /dashboard from /home.
- As a regular user, I want to be redirected to the login form when trying to access a page that I have no access to.
- As a regular user, I want to be redirected from the login form to the page I originally wanted to go to.
- As a logged in user, I want my session to be remembered, so that I can come back to the dashboard later without having to log in again.
- As a logged in user, I want to be able to log out.
- The application should have page transitions.
- The menu should have animations.
- Add as many accessibility (a11y) as you can fit within the time.

## Things we will look out for

- Proper interpretation of the assignment: how well you read the assignment and specifications.
- State management: how you deal with data being stored and shared throughout the application.
- Don't overuse animations, make them almost functional. We want you to showcase your skills, but we are not looking for a Las Vegas show :)
- Proper use of existing packages: which packages you select, and why.
- Code quality: how easy to understand your code is, and how well it conforms to standards.
- A README explaining your thoughts and choices made during the assessment.
- Use of tests (this is not obligated but a big plus!)
- Good use of Git so send us a git repo


## Things we will NOT look out for

- Security of the credentials, that is NOT part of this assignment.


# Plan van aanpak
## Analyseren
Ik heb React of Yarn niet eerder gebruikt, dus ik ben begonnen de [start-gids van React](https://create-react-app.dev/docs/getting-started/) doorlezen en een React-app aanmaken met Yarn. Vervolgens geprobeerd de app te starten met yarn start, dit werkte. Een repo aangemaakt en de eerste push gedaan + readme aangemaakt.

Nu nadenken over welke routes ik nodig heb:
- /home (/ of /home)
- /login
- /dashboard (Logged in user)

Vervolgens moet ik deze dingen uitzoeken:
- Hoe maak je routes?
- Hoe maak je componenten?
- Hoe maak je een route waar je niet bij kan komen zonder in te loggen?
- Hoe log je in?
- Hoe sla je dingen op tussen sessies?
- Hoe log je uit?

## Ontwerpen
De website is niet erg uitgebreid en de enige dingen die ik zou moeten ontwerpen waren een nav/menu en een form. Ontwerpen doe ik in Figma. Ik ben mobile-first begonnen om het process makkelijk te houden. 

### Nav-Mobiel
Eisen:
- 3 links (Home, Login en Dashboard)
- Geanimeerd, niet te gek.

![image](https://github.com/user-attachments/assets/566d4dec-923a-4dce-aae3-48bdcd35c439)


> Het idee is dat de gebruiker 2 knoppen heeft totdat er ingelogd wordt, dan komt er een uitlog knop bij.


## Form-Mobiel
Zelfde stijl als de nav.

## Bouwen
### Routes
Ik ben begonnen met de routes aanmaken en deze met elkaar te linken zodat ik kan navigeren. Dit heb gedaan met de react-router-dom.
```import { HashRouter as Router, Routes, Route } from 'react-router-dom';```

### Nav
Aan de hand van een uitleg-video begonnen met een nav-component. Deze geef ik als Layout bestand weer op elke pagina. Ook gebruik ik de ```activeclassname``` om een andere styling mee te geven aan de actieve pagina.


Ik heb verder nog gemaakt dat de gebruiker na het inloggen een uitlog knop in beeld krijgt i.p.v. een login knop, deze logout knop krijgt de logout functie mee, die in het app.js bestand de gegevens uit de lokale opslag verwijderd, de username leegmaakt (zodat deze met gebruiker vervangen wordt) en de auth weer op false zet.
```
const logout = () => {
    setAuth(false);
    setUsername(''); 
    localStorage.removeItem('auth');
    localStorage.removeItem('username'); 
};
```


### ProtectedRoute.js
Ik had geen idee hoe ik een route maak waar je niet standaard bij kan. Na het volgen van een uitleg op Youtube is dit gelukt.


```
<Route
    path="/dashboard"
    element={<ProtectedRoute auth={auth} element={<Dashboard />} />}
/>
``` 


Op deze manier kan de route /dashboard alleen bekeken worden als auth=true is, als dat zo is laat hij het dashboard element zien. Als de gebruiker niet ingelogd is en toch op /dashboard probeert te komen, wordt deze doorgestuurd naar /login.


### Login
Op de login pagina heb ik een form gemaakt waar de gebruiker kan inloggen. Als de gegevens gesubmit worden, worden ze vergeleken met de door mij ingestelde gegevens, als deze overeenkomen wordt de data doorgestuurd naar de login-functie, waar de  auth op true gezet en dan wordt de gebruiker doorgestuurd naar /dashboard, als ze niet overeenkomen krijgt de gebruiker een melding met dat de gegevens ongeldig zijn.


In de login functie wordt het wachtwoord en de username vergeleken met de ingestelde gegevens, als dat zo is wordt auth op true gezet, en wordt dat in de lokale opslag gezet. Ook wordt de gebruikersnaam als variabele gezet zodat ik deze kan weergeven op de home-pagina. Ook de username wordt in de localstorage gezet. 

Als je vervolgens de website opnieuw bezoekt blijf je ingelogd omdat als de pagina geladen wordt of auth in de localstorage is opgeslagen, totdat de persoon uitlogt is dit het geval, dus hoef je niet opnieuw in te loggen. Ook wordt de gebruikersnaam weer ingesteld met de opgeslagen gebruikersnaam.

### Animaties
Filmpje gevolgd over AnimatePresence van Framer Motion. Dit gebruikt om de pagina's, ook kleine keyframe animatie toegevoegd aan de nav.

## Integreren
Live gezet op Vercel.

## Testen
### Ligthouse
Voor de lighthouse accesibilty test heb ik een 100% score.
<img width="713" alt="Screenshot 2024-11-30 at 14 33 25" src="https://github.com/user-attachments/assets/99476e93-6e8a-4bf0-8aa3-48699d7b2f85">

### Tab test
Ik kan moeiteloos de hele pagina door tabben, het form door en deze verzenden.

### Screenreader
Ik heb ook een screenreader test gedaan, hiermee kon ik begrijpelijk de pagina door en het form invullen en verzenden.

<img width="740" alt="Screenshot 2024-11-30 at 14 37 48" src="https://github.com/user-attachments/assets/21787ea0-e172-4d77-a34d-4c4cb3d9dac1">
