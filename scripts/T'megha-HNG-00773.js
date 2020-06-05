let newintern = [{
   greetings:'Hello World', name: 'Akinmegha Temitope Samuel', id: 'HNGi7-00773', email: 'temitopeakinmegha@gmail.com',  language: 'JavaScript'
  }]; 
  
  const Tmegha = (details) => {
  
  const myDetails = details.map(items =>{
    return `${items.greetings}, this is ${items.name} with HNGi7 ID ${items.id} and email ${items.email} using ${items.language} for stage 2 task`;
  });
  return myDetails;  
  }
  
  console.log(Tmegha(newintern));
