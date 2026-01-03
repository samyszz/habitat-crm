Firebase setup (placeholders)

1. Create a Firebase project in the console.
2. Enable Authentication → Sign-in method → Email/Password.
3. Create a Firestore database (in test or locked mode depending on your needs).
4. Add the following variables to a `.env` file at the project root (see `.env.example`):

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

Collections used by the app:
- acolhidos
- adotantes
- rescues

Security rules and production notes: adjust Firestore rules to require authentication for writes in production and review billing limits before enabling high-frequency writes.
