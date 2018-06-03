var counter = (function(){

    //private stuff
    let count = 0;
    function print(message){
        console.log(message + '---' +count);
    }
    //return an object

    return {
        //value1:count,
        get:function(){
            return count;
        },
        set:function(value){
            count = value;
        },
        increment:function(){
            count+=1;
            console.log('after increment '+count);
        },
        reset:function(){
            print('before reset ');
            count = 0;
            print('after reset ');
        }
    }

})();
counter.set(9);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.reset();
