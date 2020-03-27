var Raccoon = (function(__super){
  name = "Jora";
  function steal(){
    console.log("I'm stealing!")
  };


  function Raccoon() {
    __super.call(this);
  };
  
  Raccoon.prototype = Object.create(__super.prototype)
  Raccoon.prototype.constructor = Raccoon;

  Raccoon.prototype.name = name;
  Raccoon.prototype.steal = steal;

  return Raccoon
})(Mammal)