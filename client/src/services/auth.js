import firebase from "../configs/firebase";

const socialMediaAuth = (provider) => {
  firebase.auth().signInWithPopup(provider).then((res) => {
    return res.user;
  }).catch((error) => {
    return error;
  });
};

export default socialMediaAuth;