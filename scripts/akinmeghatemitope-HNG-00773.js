// 'var' keyword to declare newintern variables
var newintern = [{
    name: 'Akinmegha Temitope Samuel', id: 'HNGi7-00773', email: 'temitopeakinmegha@gmail.com',  language: 'JavaScript'
  }]; 
  
  const Tmegha = (details) => {
  
  const myDetails = details.map(items =>{
    return `Hello World, this is ${items.name} with HNGi7 ID ${items.id} and email address ${items.email} using ${items.language} for stage 2 task`;
  });
  return myDetails;  
  }
  
  console.log(Tmegha(newintern));
