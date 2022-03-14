import App from './App.svelte';
import LoginButton from './LoginButton.svelte';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
  } from "@rgossiaux/svelte-headlessui";
  let plan = "startup";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT19ZtKWpm2BuoGG5YJpdn7vuEUHS44q8",
  authDomain: "projectlocalhelp.firebaseapp.com",
  projectId: "projectlocalhelp",
  storageBucket: "projectlocalhelp.appspot.com",
  messagingSenderId: "954296003888",
  appId: "1:954296003888:web:fb271d9d2d4c8d27ec2cf5",
  measurementId: "G-YPWRZYWDM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Mainapp = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


export default Mainapp;