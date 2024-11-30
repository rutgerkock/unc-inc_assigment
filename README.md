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

## Ontwerpen
De website is niet erg uitgebreid en de enige dingen die ik zou moeten ontwerpen waren een nav/menu en een form. Ontwerpen doe ik in Figma. Ik ben mobile-first begonnen om het process makkelijk te houden. 

### Nav
Eisen:
- 3 links (Home, Login en Dashboard)
- Geanimeerd, niet te gek.

![image](https://github.com/user-attachments/assets/447c9696-e554-4edb-9744-70defbfcc4ab)
> Het idee is dat de gebruiker op mobiel 2 knoppen heeft, eentje om terug naar home te gaan, en eentje om in te loggen. Als de gebruiker ingelogd is brengt de tweede knop de gebruiker naar het dashboard. 


## Bouwen
### Routes
Ik ben begonnen met de routes aanmaken en deze met elkeaar te linken zodat ik kan navigeren. Dit heb gedaan met de react-router-dom.
```import { HashRouter as Router, Routes, Route } from 'react-router-dom';```

### Nav
Aan de hand van een uitleg-video begonnen met een nav-component. Deze geef ik als Layout bestand weer op elke pagina. 

## Integreren

## Testen
