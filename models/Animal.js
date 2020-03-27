var Animal = (function(){
  function Animal() {}
  Animal.sex = "female";
  Animal.age = 7;
  Animal.run = function() {
    if(this.age > 5)
    {
      console.log("I'm running!")
    }
  }
  Animal.jump = function(){
    if(this.age < 5)
      {
        console.log("I'm jumping!")
      }
}
  return Animal
})();
  