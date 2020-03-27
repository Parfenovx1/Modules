var Animal = (function(){
  var sex = "female";
  var age = 7;
  function run() {
    if(this.age > 5)
    {
      console.log("I'm running!")
    }
  }
  function jump(){
    if(this.age < 5)
      {
        console.log("I'm jumping!")
      }
  }

  function Animal() {}

  Animal.prototype.constructor = Animal;

   Animal.prototype.sex = sex;
   Animal.prototype.age = age;
   Animal.prototype.run = run;
   Animal.prototype.jump = jump;

  return Animal
})();
  