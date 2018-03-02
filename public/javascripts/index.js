
document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('#login');
  const card = document.querySelector('.card');
  const provider = new firebase.auth.GoogleAuthProvider();

  loginButton.addEventListener('click', () => {

  	firebase.auth().signInWithPopup(provider).then((result) => {
  		window.location.href = window.location.href + 'map';
	}).catch((error) => {
		console.log('algo ha fallado', error);
	});    
  });
});
