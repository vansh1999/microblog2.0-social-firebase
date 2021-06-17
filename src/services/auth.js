import { auth, provider } from '../firebase';

export const signInWithGoogle = async () => {
	let user;

	await auth
		.signInWithPopup(provider)
		.then(res => {
			console.log(res.user);
			user = res.user;
		})
		.catch(error => {
			console.log(error.message);
		});

	return user;
};

export const logout = async () => {
	let logout_success;
	await auth
		.signOut()
		.then(() => {
			logout_success = true;
			console.log('signout successfully');
			window.location.reload();
		})
		.catch(error => {
			console.log(error.message);
		});

	return logout_success;
};
