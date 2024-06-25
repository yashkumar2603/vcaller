<font color="#f79646">Deployed Link -</font> [(VCaller-)](https://vcaller-omega.vercel.app/)
Github link - [yashkumar2603/vcaller (github.com)](https://github.com/yashkumar2603/vcaller)

### Problem Statement - 
This is made for people who want to easily and quickly set up  an online meeting with multiple people without much hassle, in the browser itself.
The need for screen sharing and chatting is inevitable in any video-calling client as it enables a smooth sharing and collaboration experience.---

## Features and their implementation - 
Authentication - 
* A smooth -login experience using Firebase authentication for google login.
* This ensures a level of security in the video call client system.

Room Creation and Room Code -
* To join a call, you can either enter a pre-existing room code or generate a new room, in which case the application will give a new randomly generated room code.
* Upon entering the room code, you are connected to the call, upon passing through a audio and video check page.

Sharing room code - 
* This feature is aimed at helping the host to invite attendees easily, as you can send the room code as a ready video call link via mail to your attendees.
* Alternatively you can copy the code by pressing the 'copy code' button.

In-call chat and Share screen - 
- The features of in-call chat and share screen is aimed at ease of collaboration and sharing of text such as code. 
- The share screen feature prompts one to select a single browser tab /window/ the whole monitor screen to the call. This ensures a level of privacy.

### High Level Overview of Codebase -
Folder structure
```
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── EmptyCodePage.js
│   ├── Home.js
│   ├── Room.js
│   ├── SignIn.js
│   ├── assets
│   │   ├── asset.png
│   │   ├── conf.jpg
│   │   └── logo.png
│   ├── components
│   │   └── Navbar.js
│   ├── index.css
│   ├── index.js
│   └── utils
│       └── firebase.js
└── tailwind.config.js
```

##### Libraries and Frameworks used - 
This project uses the following additional libraries and frameworks:

- **EmailJS:** A service for sending emails through a web interface. (used in the `EmptyCodePage` component)
- **zegocloud-api-kit:** A library for building real-time audio and video calling features.
- **Firebase:** A library for adding Google Firebase services to the project, such as authentication, databases, and real-time messaging.
- **react-firebase-hooks:** A library that simplifies using Firebase features within React components.

##### Functions and use of each component - 
<font color="#f79646">EmptyCodePage.js -</font>
- **Generate a Code:** The user can click a button to generate a random alphanumeric code of 6 characters. This code can be used for any purpose, but the context suggests it might be a room code for a meeting or event.
- **Copy Code to Clipboard:** Once a code is generated, users can click another button to copy it to their clipboard. This lets them quickly paste the code into another application, such as a chat or email.
- **Send Code via Email:** The user can enter a list of recipient email addresses separated by commas. The code and the user's name (optional) are then sent to those email addresses using EmailJS. The user receives a message indicating success or failure.
  
<font color="#f79646">Home.js -</font>
- **Join a Room:** Users can enter a room code and click "Join Room" to enter an existing video conference. If the room code is empty, it redirects them to a different page (likely for generating a code).
- **Create a Room:** Clicking the "Create Room" button redirects the user to a different page (likely for generating a code).
- **Logout:** A logout button is available in the top right corner. Clicking it removes the user's email from local storage and redirects them to the sign-in page.

<font color="#f79646">Room.js - </font>
- **Gets room ID:** It extracts the room ID from the URL using `use params.`
- **Joins the room:** It uses ZegoCloud service to join the room specified by the ID.
    - It generates a temporary access token and creates a ZegoKitPrebuilt instance.
    - It then calls `joinRoom` to start the video conference.
- **Shows video stream:** It renders a `div` element that takes up the entire screen. This element is where participants' video and audio streams will be displayed.

<font color="#f79646">SignIn.js</font> -
- **Checks for existing login:** It checks if there's a stored email in Local Storage and sets the state if found.
- **Google Sign-in:** It provides a button for signing in with Google using Firebase. It stores the user's email in state and Local Storage upon successful login.
- **Conditional rendering:** It displays the Home component if the user is signed in (email exists in state). Otherwise, it shows the Sign-in page with the Google Sign-in button.

Used the following commands and set the project - 
``` shell
npx create-react-app caller
cd caller
npx install -D tailwindcss postcss autoprefixer
npx tailwind css init -p
npx tailwindcss init -p
```


