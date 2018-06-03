let counter = 0;
function timeout()
{
    setTimeout(function(){
        console.log(counter++);
        timeout();
    }, 50)
}


(function() {
    timeout();
})();