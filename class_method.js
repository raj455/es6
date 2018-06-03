class User {
    constructor(email, name) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.name, 'logged in');
    }
    logout() {
        console.log(this.name, 'logged out');
    }
}

var userOne = new User('raj@gmail.com', 'raj');

console.log(userOne);
userOne.login();
userOne.logout();