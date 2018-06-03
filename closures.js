function sayHello(name){
    return (name)=>{
        console.log('Hody '+name);
    }
}

let res = sayHello("rah");
res();