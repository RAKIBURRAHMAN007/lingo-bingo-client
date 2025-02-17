# project name : Lingo Bingo : A Vocabulary Learning Application.

# purpose  : 
Lingo Bingo is a vocabulary learning application designed to make language acquisition fun, interactive, and accessible. The purpose of the website is to help users overcome the challenges of memorizing and retaining vocabulary in a new language through an engaging and structured approach. By providing a personalized experience and leveraging modern technologies, the platform aims to improve users' communication skills in their chosen language.

# Live URL : https://lingo-bingoo.netlify.app/

# key features:
**1. Interactive Vocabulary Learning:** Structured lessons with pronunciation, meaning, and usage examples.
**2. Firebase Authentication:** Secure login/register with Google sign-in and private user routes.
**3. User Profiles:** View and update profile details like name and photo.
**4. Gamified Progress:** Animated counters for vocabulary and lessons completed.
**5. Tutorials:** Embedded YouTube videos for pronunciation and cultural learning.
**6. Responsive Design:** Optimized for mobile, tablet, and desktop devices.
**7. Pronunciation Support:** Audio feature to pronounce vocabulary words.
**8. Error Handling:** Custom 404 page for invalid routes.
**9. Secure Data Management:** Environment variables for Firebase keys and secure user access.

# npm packages I have used :
1. react
2. react-router-dom
3. firebase
4. react-toastify
5. react-countup
6. axios
7. animate.css

For the **Lingo Bingo** project, here’s how you can add the guidelines to run the project locally:

### How to Run Lingo Bingo Locally

1. **Clone the Repository:**
   Clone the project repository to your local machine using:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**
   Change into the project folder:

   ```bash
   cd LingoBingo
   ```

3. **Install Dependencies:**
   Install all necessary dependencies using npm:

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root of your project directory.
   - Add your Firebase credentials in the `.env` file. Example:

     ```bash
     REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
     ```

5. **Start the Development Server:**
   After installing dependencies and setting up the environment variables, run the following command to start the local development server:

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

### Additional Information:
- **Authentication Setup:** Ensure Firebase authentication is properly configured for Google sign-in.
- **Profile Management:** Set up the ability to manage user profiles by linking the Firebase authentication to update and view details such as name and photo.
- **Pronunciation Support:** Ensure the audio feature is properly integrated to pronounce vocabulary words.

Once everything is set up, you should be able to run the project on your local machine!

