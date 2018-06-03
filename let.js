function vijay()
{
    var a = true;
    var b = 'vijay';
    console.log('\n before:',b);

    if(a){
        var b = 'raj';
        console.log('after:',b);
    }

    console.log(b);
}
vijay();

