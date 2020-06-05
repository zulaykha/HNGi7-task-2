class User {
    constructor(firstname, lastname, language, id, email ) {
        this.firstname= firstname;
        this.lastname= lastname;
        this.language= language;
        this.id= id;
        this.email =email;
}
sayHello ( ) {
    let outputMessage  = `Hello World , this is ${this.firstname} ${this.lastname} with HNGi7 ID ${this.id} and email ${this.email} using ${this.language} for stage 2 task`;
return outputMessage;
   }
} 
const me = new User(
    "Grace",
    "Idumah",
    "javascript",
    "HNG-03023",
    "idumahgrace@yahoo.com",
);
console.log(me.sayHello());