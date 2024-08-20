import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBfX8juHZNiWtw_Tr_il0ucgAw5KjVK-Ps',
  authDomain: 'pft-v2-ae626.firebaseapp.com',
  projectId: 'pft-v2-ae626',
  storageBucket: 'pft-v2-ae626.appspot.com',
  messagingSenderId: '438645195161',
  appId: '1:438645195161:web:dc2e6dd1b1f2724f05d308',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
