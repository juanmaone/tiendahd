 
 
 //probar en js bean
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
//reject mensaje de error
});
/*
task.then((res) => {
    //throw new Error('Oops!');
    console.log('Resolvdeed: '+res)
}*/