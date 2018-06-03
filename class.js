class User {
    constructor(email, name) {
        this.name = name;
        this.email = email;
    }
}

var userOne = new User('raj@gmail.com', 'raj');

console.log(userOne)