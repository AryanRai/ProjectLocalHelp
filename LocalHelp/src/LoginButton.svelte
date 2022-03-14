<script>
	export let method;
	import { GoogleAuthProvider } from "firebase/auth";
	import { getAuth, signInWithPopup } from "firebase/auth";

	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	provider.setCustomParameters({
  	'login_hint': 'user@example.com'
	});

	export function signInWithGoogle() {
		document.getElementById('swd').textContent = "adsda";
		signInWithPopup(auth, provider)
  	.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  	}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  	});
	}



</script>

<main>
	<button>{method} with your google</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	button {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>