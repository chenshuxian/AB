import * as Facebook from 'expo-facebook';
import firebase from 'firebase';

const isUserEqual = (facebookAuthResponse, firebaseUser) => {
  if (firebaseUser) {
    const { providerData } = firebaseUser;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
        providerData[i].uid === facebookAuthResponse.id
      ) {
        // We don't need to re-auth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const checkLoginState = (user) => {
  if (user) {
    // User is signed-in Facebook.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();

      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(user, firebaseUser)) {
        // Build Firebase credential with the Facebook auth token.
        const credential = firebase.auth.FacebookAuthProvider.credential(
          user.token
        );
        // Sign in with the credential from the Facebook user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            // console.log(`write ${JSON.stringify(result)}`);
            if (result.additionalUserInfo.isNewUser) {
              firebase.database().ref(`users/${result.user.uid}`).set({
                email: result.additionalUserInfo.profile.email,
                picture: result.additionalUserInfo.profile.picture.data.url,
                name: result.additionalUserInfo.profile.name,
                gender: result.additionalUserInfo.profile.gender,
                location: result.additionalUserInfo.profile.location.name,
                birthday: result.additionalUserInfo.profile.birthday,
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
            // const email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // const credential = error.credential;
            // ...
            // eslint-disable-next-line no-console
            console.log(`credentialErr ${error}`);
          });
      } else {
        // User is already signed-in Firebase with the correct user.
      }
    });
  } else {
    // User is signed-out of Facebook.
    firebase.auth().signOut();
  }
};

const signInWithFacebookAsync = async () => {
  try {
    await Facebook.initializeAsync('700781753854549').catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`Facebook initializeAsync: ${error}`);
    });

    const result = await Facebook.logInWithReadPermissionsAsync({
      permissions: [
        'public_profile',
        'email',
        'user_birthday',
        'user_hometown',
        'user_location',
      ],
    });

    if (result.type === 'success') {
      checkLoginState(result);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    // eslint-disable-next-line no-console
    console.log(`fb err: ${JSON.stringify(message)}`);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { signInWithFacebookAsync };
