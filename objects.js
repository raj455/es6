function User(name, email) {
    this.name = name;
    this.email = email;
    this.login = function() {
        console.log(this.email, 'logged in');
    }
}

var userOne = new User('raj', 'raj@gmail.com');
var userTwo = new User('raj2', 'raj2@gmail.com');

userOne.login();
// console.log(userOne);
