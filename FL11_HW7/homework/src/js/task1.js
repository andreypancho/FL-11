const minLengthEmail = 6;
const minLengthPassword = 5;

let email = prompt('Enter email address');
if (email === null || email.trim().length === 0) {
    console.log('Canceled.');
} else if (email.trim().length < minLengthEmail) {
    console.log("I don't know any emails having name length less than 6 symbols");
} else if (
    email.trim() === 'user@gmail.com' ||
    email.trim() === 'admin@gmail.com'
) {
    let password = prompt('Enter password');
    if (password === null || password.trim().length === 0) {
        console.log('Canceled.');
    } else if (
        email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass'
    ) {
        let willChanged = confirm('Do you want to change your password?');
        if (willChanged) {
            let oldPassword = prompt('Enter old password');
            if (oldPassword === password) {
                let newPassword = prompt('Enter new password');
                if (newPassword.length < minLengthPassword) {
                    console.log('It’s too short password. Sorry.');
                } else {
                    alert('You have successfully changed your password.');
                }
            } else {
                console.log('You wrote the wrong password.');
            }
        } else {
            console.log('You have failed the change.');
        }
    } else {
        console.log('Wrong password');
    }
} else {
    console.log('I don’t know you');
}