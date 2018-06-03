function sayHello(name){
    return ()=>{
        console.log('Hody '+name);
    }
}

sayHello(name)();