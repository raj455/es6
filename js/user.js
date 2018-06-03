var userOne = {
    name: 'rajendra',
    email: 'raj.grd.jh@gmail.com',
    login() {
        console.log('logged in user ' +this.name);
    }
}

userOne.age = 25;
console.log(userOne.age);

userOne.logInfo = function() {
    console.log(this.email);
}

userOne.logInfo();