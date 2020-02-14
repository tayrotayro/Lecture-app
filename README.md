# 387 Lecture - Firebase Setup in React Project

## Things to Consider(MUST READ)

This project already has firebase configured and installed. I am providing this code as an example to you. The main file in in Src -> App.js. This is the only file we edited in class. The directions below are for setting a new React.js app to a firebase project.

What I challenge you to do is set up your dev environment in React.js, create a simple app, then try to follow the instructions below to successfully hook up your app to the database. Make sure you read the React.js and Firebase documentations.

### Setting Up

1. Created React Project first

2. Use your Google account to log into Firebase console on your browser and create a new project
   <https://firebase.google.com>
3. Create an app within your project (web app)

4. Look for a setting gear at top of page -> Project Settings -> “Add App” under your apps -> choose “Web” -> give it a name and click “Register App” -> click go to console

5. Still within the Project Settings page,
   change “GCP Resource location” to (us-central)

6. Install Firebase CLI
   <https://firebase.google.com/docs/cli>

7. Run `sudo npm install -g firebase-tools`

8. Run firebase login (make sure you choose the google account that your project is on if you have more than one google account)

9. Run firebase projects:list (to make sure the newly created project is in your project list).

10. Initiating Firebase app in your project
    Run `firebase init`
11. Choose database and hosting
    - If there’s an error “fetching firestore indexes”, go to Firebase console -> “Database” and you should see something about google cloud platform. Click the link on console and then switch to Native Mode. After switching to Native Mode, run firebase init again.
12. For React projects, public directory is “build”

### Hosting

1. Run `npm run build`
2. Run `firebase deploy`
   - Make sure you’re in Native Mode
     Set up config key from project settings -> your apps -> firebase SDK snippit -> choose the config button and copy and paste that key in App.js
3. Run npm install firebase
4. Refer to code for the rest
