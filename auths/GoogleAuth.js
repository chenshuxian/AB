/* eslint-disable no-console */
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const { providerData } = firebaseUser;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const onSignIn = (googleUser) => {
  // console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );
      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          // console.log('user sign in');
          // console.log(result);
          if (result.additionalUserInfo.isNewUser) {
            firebase.database().ref(`users/${result.user.uid}`).set({
              email: result.additionalUserInfo.profile.email,
              picture: result.additionalUserInfo.profile.picture,
              family_name: result.additionalUserInfo.profile.family_name,
              given_name: result.additionalUserInfo.profile.given_name,
              locale: result.additionalUserInfo.profile.locale,
              created_at: Date.now(),
            });
          } else {
            firebase.database().ref(`users/${result.user.uid}`).update({
              last_logged_in: Date.now(),
            });
          }
        })
        .catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // // The email of the user's account used.
          // const { email } = error;
          // // The firebase.auth.AuthCredential type that was used.
          // const { credential } = error;
          // ...
          // eslint-disable-next-line no-console
          console.log(`err ${error}`);
        });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
};

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      // androidClientId: YOUR_CLIENT_ID_HERE,
      // behavior: 'web',
      iosClientId:
        '133524036184-uvjkt4t03ma7oo2fe54al80e4o3em584.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      onSignIn(result);
      return result.accessToken;
    }
    return { cancelled: true };
  } catch (e) {
    console.log(`result ${e}`);
    return { error: true };
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signInWithGoogleAsync };
