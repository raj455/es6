function User(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
}

var userOne = new User('raj', 'raj@gmail.com');
var userTwo = new User('raj2', 'raj2@gmail.com');


User.prototype.login = function() {
    this.online = true;
    console.log(this.email, ' is logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, ' is logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.userDelete = function() {
    console.log(this.name,'deleted');
}

var admin = new Admin('admin1', 'admin@gmail.com');
console.log(admin)

// console.log(userOne);
// userTwo.login();
// userTwo.logout();