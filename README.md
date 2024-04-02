Episode 14 - NetflixGPT - The Beginning
0:00 to 8:35 - Introduction
08:36 - Part -1

- How to create a React Project using “Create React App”
- 14:00 - npm start
- Setting up the Tailwind CSS to our App
- 19:00 - how to install Tailwind CSS
- Netflix website features noted which are need to be cloned
- Features

### 33:00 - Part -2

- Create a new Github Repository & push the code
- Login & headers components created
- Body.js component created
- 42:18 - Setup Routing
- 50:45 - Netflix Logo inserted
- 55:35 - Login form
- 01:10:10 - Create a Sign up form
- 01:23:00 - “formik” library for forms

### 01:27:10 - Part -3

- Form Validation -- `We validitate a form by 2 way.
1st is by maintaing the state and pass the value of the input field.
2nd is by useref.`
- useRef hook
- 01:34:00 - Regex validation
- useRef hook usage
- Showing error message while log in

### 01:57:35 - Part - 4

- Authentication
- Firebase -- `By using firebase we authrnticate our app.`

#### FireBase setup -

1. Get started our app and give name of project.
2. Our app fire base created.
3. Go to web (<>) logo and follow the steps.

- install the firebase in our app by using `npm install firebase`
- create a file firebase.js in util folder for configration and copy and paste the code that is in firebase.
- In last run this command `npm install -g firebase-tools`

- 02:14:00 - Build command
- 02:14:52 - Deploying
- 02:16:35 - 3 commands to deploy application , 1- firebase login, 2 - firebase init , 3- firebase deploy.
- 02:21:00 - Create Signup user account
- Reading Firebase Documentation
- 02:28:00 - Sign-in/ Sign-up Logic

### 02:29:46 - Part - 5

- 02:39:00 to 02:42:00 - User successfully registered
- 02:43:20 - Sign in logic
- 02:50:00 - Firebase error - user not found

#### Explaination part 4 & 5 -->

In this part we install the firebase and configure it then deploy our app with using firebase, Then we authenicatate our app with signUP and signIn.

### 02:52:05 - Part - 6

- Setup Redux store, userSlice -- Command - npm i -D @reduxjs/toolkit, npm react-redux
- 03-05-00 - onAuthChange()
- 03:12:20 - useDispatch()
- 03:20:20 - useNavigate()
- 03:22:50 - Building header for browse page.
- 03:22:35 - building signout feature
- 03:33:30 - Manage users and update the user profile by using the API.
- 03:40:00 - Adding user profile pic
- 03:42:48 - Fixing a Bug!

#### Explain --

Frist we setup redux store. The need of resux store is when the user signUp/signIn or signOut our redux store will update.
But the problem is that we dispach an action happen multiple time like when user signUp/ when user signIn so avoding this again and again dispatch we use a utility given by firebase `onAuthChange` this api call when the user signIn/signUp and signOut. Using onAuthStateChanged at the root level: The onAuthStateChanged function is used to monitor the user's authentication state. In this code, it is called at the root level of the component tree, which means that it will monitor the authentication state of the user throughout the entire application. This is useful because it allows the application to keep track of the user's authentication state and render the appropriate components based on whether the user is signed in or not.
When you use onAuthStateChanged at the root level, you can ensure that the user's authentication state is always up-to-date, regardless of where they are in the application. This is especially important for applications that have different components or pages for signed-in and signed-out users. 2. Using useEffect here: The useEffect hook is used to manage side effects in functional components. In this code, it is used to call the onAuthStateChanged function when the component mounts.

Using useEffect ensures that the onAuthStateChanged function is only called once, when the component first mounts. This is important because calling it multiple times could result in unnecessary re-renders and performance issues.

Additionally, using useEffect with an empty dependency array ([]) ensures that the function passed to useEffect is only called once, when the component first mounts.

Using useEffect here is a best practice for managing side effects in functional components, and it helps ensure that the onAuthStateChanged function is called correctly and efficiently.

After managing auth sate change we dispatch the user detail to redux store and navigate to browser is user signIn/signUp but if user signOut we naviagte to "/" root page.
`naviage always use as a child  of Router.`
For signout we use firebase signOut api in Header Component.we also update the user profile like displayName and imageURL by using the profileUpdate api given by firebase.

we fixing a bug. when we update our store in Body section when onAuthStatechange is trigger it not update the current useer displayName and imageURL, for fixing this issue we update our store from
sign component.

````JS
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://avatars.githubusercontent.com/u/38842501?v=4",
            })
              .then(() => {
                /**
                 * ! we not directly access the user data bcz itis not updated so we access
                 * ! updated data by using auth.current.
                 */
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
              });```
03:49:30 - Part - 8

- TMDB APIs
  —-----------------------------------------------------------------------------------
  Episode 15 - Building the Core
  0:52 - Part - 9
- Fixing a Bug(when logged out also, any user can access browse page)
- “Navigate”
- 08:00 - useEffect
- 14:00 - Sign-in redirecting to browse page & if the user is not logged in Redirect/browse
  to login page and vice-versa
  16:30 - Part -10
- Till 21:10 - unSubscribing onAuthState Change
  21:45 - Part -11 (Adding constant file to the project)
- 23:35 - Make a separate file Constants.js
- Till 30:25 - Adding user image into the Constants.js file
- 31:45 - Add hardcoded values to the constants file
  32:43 - Part - 12
- 34:00 - TMDB API and how to fetch APIs
- 45:50 - Strict Mode in React
- Register TMDB API & Create an app and get access token
- Get data from TMDB now playing movies list API
  49:05 - Part -13
- Adding movie data to the store (moviesSlice)
  56:25 - Part - 14
- Creating your own custom Hook
  01:03:15 - Part -15 - Building Browse Page
- UI Plan
- MainContainer
- VideoBackground
- VideoTitle
- Secondary Container
- MovieList \* n
- cards\*n
  01:17:03 - Part -16
- Building Video Title & Styling it by using Tailwind CSS
  01:29:09 - Building Video Background
  02:03:15 - Creating Custom Hook for trailer video
  02:11:45 - Part -17 - Building Video Background
  02:32:00 - Progress till now
- Custom Hook for now playing Movies
- Create movieSlice
- Update store with moviesData
- Planning for MainContainer & Secondary Container
- Fetch Data for Trailer video
- Update store with Trailer Video Data
- Embedded the YouTube video & make it autoplay and mute
- Tailwind classes to make MainContainer look awesome
  02:37:44 - Part -18 - Creating Movie Suggestions List
- Building Secondary Container
- 02:56:48 - How to display 20 cards?(Map Function)
  03:20:02 - Part -19 - Showing Popular Movies list on Browse page
- UI Plan achieved
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browse page amazing with Tailwind CSS
- usePopularMovies custom Hook
  —----------------------------------------------------------------------------------------------
  Episode 16 - NetflixGPT - Wrapping Up
  01:13 - Part -20
- Introduction to GPT
  05:02 - Part - 21
- Building GPT Search Page
  41:40 - Part - 22
- Building Multi Language Pages
  01:23:41 - Part - 23
- Adding GPT feature to our App
- 02:15:00 - Promise.all() function
  02:33:33 - Part - 24
- Buidling GPT Movie Suggestions UI
  02:59:25 - Part - 25
- Securing our API keys
  03:08:45 - Part - 26
- Understanding Memoization of data in our apps
  03:16:50 - Part - 27
- OpenAI usage bill and suggestions
  03:22:16 - Part - 28
- Making our App Mobile Responsive
  Progress Track (readme file)
- Get OpenAI API key
- GPT Search API call
- Fetched gptMovieSuggestions from TMDB
- Created gptSlice & added data
- Reused MovieList component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our site responsive
  04:01:28 - NetflixGPT - Ending Note
  —-----------------------------------\*\*\*\*------------------------------------------------------------------
````
