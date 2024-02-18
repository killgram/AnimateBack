import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { Constants } from "@configurations/constants";

const firebaseConfig = {
  apiKey: Constants.API_KEY,
  authDomain: Constants.AUTH_DOMAIN,
  projectId: Constants.PROJECT_ID,
  storageBucket: Constants.STORAGE_BUCKET,
  messagingSenderId: Constants.MESSAGING_SENDER_ID,
  appId: Constants.APP_ID,
};

const app = initializeApp(firebaseConfig);
const fbClient = getFirestore(app);

export { fbClient };
