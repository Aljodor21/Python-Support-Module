const signIn = document.querySelector('#signin-form');

signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const psw = document.querySelector('#pssw').value;
    auth
        .createUserWithEmailAndPassword(email, psw)
        .then(userCredential => {
            console.log('Sign Up')
        })  
})
