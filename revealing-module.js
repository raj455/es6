var counter = (function(){

    //private stuff
    let count = 0;
    function print(message){
        console.log(`$(message) => $(count)`);
    }
    //return an object

    function getCount(){ return count; }
    function setCount(value){ count = value; }
    function incrementCount(){
        count+=1;
        console.log('After Increment '+count);
    }
    function resetCount(){
        print('Before reset  ');
        count = 0;
        print('After reset  ');
    }

    return {
        //value1:count,
        get:getCount,
        set:setCount,
        increment:incrementCount,
        reset:resetCount
    }

})();

counter.increment();