let intern = {
    firstName: "Kelvin",
    lastName: "O Chibuikem",
    myEmail: "chigbatachibuike@gmail.com",
    myinternshipId: "HNG-02959",
    myStageTwoTask: function() {
      return (`Hello world, this is ${this.firstName} ${this.lastName} with HNGi7 ID ${this.myinternshipId} and email ${this.myEmail} using JavaScript for stage 2 task.`)
      }
  };
  
  console.log(intern.myStageTwoTask());