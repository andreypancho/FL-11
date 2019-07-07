const minLengthEmail = 6;
const minLengthPassword = 5;

let email = prompt('Enter email address');
if (email === null || email.trim().length === 0) {
    alert('Canceled.');
} else if (email.trim().length < minLengthEmail) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (
    email.trim() === 'user@gmail.com' ||
    email.trim() === 'admin@gmail.com'
) {
    let password = prompt('Enter password');
    if (password === null || password.trim().length === 0) {
        alert('Canceled.');
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
                    alert('It’s too short password. Sorry.');
                } else {
                    let newPasswordRepeat = prompt('Repeat new password');
                    if (newPassword === newPasswordRepeat) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('You wrote the wrong password.');
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}