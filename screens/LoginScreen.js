import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { signInWithGoogleAsync } from '../auths/GoogleAuth';
import { signInWithFacebookAsync } from '../auths/FacebookAuth';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // isUserEqual = (googleUser, firebaseUser) => {
  //   if (firebaseUser) {
  //     var providerData = firebaseUser.providerData;
  //     for (var i = 0; i < providerData.length; i++) {
  //       if (
  //         providerData[i].providerId ===
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //         providerData[i].uid === googleUser.getBasicProfile().getId()
  //       ) {
  //         // We don't need to reauth the Firebase connection.
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // onSignIn = (googleUser) => {
  //   console.log('Google Auth Response', googleUser);
  //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //   var unsubscribe = firebase.auth().onAuthStateChanged(
  //     function (firebaseUser) {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       if (!this.isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         var credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.accessToken
  //         );
  //         // Sign in with credential from the Google user.
  //         firebase
  //           .auth()
  //           .signInWithCredential(credential)
  //           .then(function (result) {
  //             console.log('user sign in');
  //             //console.log(result);
  //             if (result.additionalUserInfo.isNewUser) {
  //               firebase
  //                 .database()
  //                 .ref('users/' + result.user.uid)
  //                 .set({
  //                   email: result.additionalUserInfo.profile.email,
  //                   picture: result.additionalUserInfo.profile.picture,
  //                   family_name: result.additionalUserInfo.profile.family_name,
  //                   given_name: result.additionalUserInfo.profile.given_name,
  //                   locale: result.additionalUserInfo.profile.locale,
  //                   created_at: Date.now()
  //                 })
  //                 .then(function (snapshot) {});
  //             } else {
  //               firebase
  //                 .database()
  //                 .ref('users/' + result.user.uid)
  //                 .update({
  //                   last_logged_in: Date.now(),
  //                 });
  //             }
  //           })
  //           .catch(function (error) {
  //             // Handle Errors here.
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             // The email of the user's account used.
  //             var email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             var credential = error.credential;
  //             // ...
  //           });
  //       } else {
  //         console.log('User already signed-in Firebase.');
  //       }
  //     }.bind(this)
  //   );
  // };

  // signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       //androidClientId: YOUR_CLIENT_ID_HERE,
  //       //behavior: 'web',
  //       iosClientId:
  //         '133524036184-uvjkt4t03ma7oo2fe54al80e4o3em584.apps.googleusercontent.com',
  //       scopes: ['profile', 'email'],
  //     });
  //     if (result.type === 'success') {
  //       this.onSignIn(result);
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     console.log(`result ${e}`);
  //     return { error: true };
  //   }
  // };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Sign In With Google'
          onPress={() => signInWithGoogleAsync()}
        />
        <Button
          title='Sign In With FB-2'
          onPress={() => signInWithFacebookAsync()}
        />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
