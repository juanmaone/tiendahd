 
 const task = new Promise((resolve,reject) => {
     //tarea sicnrona
     setTimeout(()=> {
        const data = [
            {id: '1',name: 'nombre', descrption: 'es la descript', stock: 4},
            {id: '2',name: 'nombre', descrption: 'es la descript', stock: 4},
            {id: '4',name: 'nombre', descrption: 'es la descript', stock: 4}
        ]
        return data;
     
 },3000);

});

task.then((res) => {
    //throw new Error('Oops!');
    console.log('Resolvdeed: '+res)
}, (err) => {
    console.log('Rejected: '+err);

}).catch((err) => {
    console.log('Problema en lectura del resultado');
    //throw new Error()
    return 'default_value'
}).then((fallback) => {
    if ( fallback === 'default_value'){
        alert ("Ok ya estamos procesando los datos!");
    }else{
        return 'Exito';
    }
}).finally((final) => {
    console.log('nueva');
});
