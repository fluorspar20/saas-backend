import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
require('json-dotenv')();

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
    // console.log(process.env.project_id, process.env.client_email);

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.project_id,
        privateKey: process.env.private_key,
        clientEmail: process.env.client_email,
      }),
    });

    const firestore = admin.firestore();
    firestoreApp = firestore;
    firestore.settings({ timestampsInSnapshots: true });
    fireorm.initialize(firestore);
    // firebaseApp = admin.firestore()
  }
}
