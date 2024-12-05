import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http'; // Importa el proveedor de HttpClient
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"choferes-e79f3","appId":"1:531334371820:web:fb88e3cba7bb43d4c408c9","storageBucket":"choferes-e79f3.appspot.com","apiKey":"AIzaSyBnG3mCVj6G46UINgyA5kSyHk7VugErgJc","authDomain":"choferes-e79f3.firebaseapp.com","messagingSenderId":"531334371820","measurementId":"G-FSRP1Q04M5"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    provideHttpClient(), // Agrega el proveedor de HttpClient 
  ]
};
