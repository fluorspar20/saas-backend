import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
require('dotenv').config();

let firebaseApp: admin.app.App | null = null;
export function getFirebaseApp() {
  return firebaseApp;
}

let firestoreApp = null;
export function getFirestoreApp() {
  return firestoreApp;
}

export async function initFirebase() {
  if (!firebaseApp) {
    console.log(process.env.PROJECT_ID, process.env.CLIENT_EMAIL);

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        privateKey: process.env.PRIVATE_KEY,
        clientEmail: process.env.CLIENT_EMAIL,
      }),
    });

    const firestore = admin.firestore();
    firestoreApp = firestore;
    firestore.settings({ timestampsInSnapshots: true });
    fireorm.initialize(firestore);
    // firebaseApp = admin.firestore()
  }
}
