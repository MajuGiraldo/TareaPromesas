const blusa = {
  nombre: "Blusa",
  stock: 10
};

const comprarRopa=(blusa)=>{
  pagarRopa(blusa).then(resultado =>{
    console.log(resultado);
  }).catch(error=>{
    console.log(error);
  });
} 

const pagarRopa=(blusa)=>new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      if(blusa.stock > 0){
        resolve("Hay prendas disponibles de la prenda seleccionada para que hagas tu compra")
      } else {
        reject ("No hay en stock la prenda seleccionada. No puedes hacer tu compra")
      }
      revisando = true
    }, 5000);
      
})

comprarRopa(blusa)

