var Raccoon = (function(__super){
  function Raccoon() {
    __super.call(this);
  }
  Raccoon.name = "Jora";
  Raccoon.steal = function(){
    console.log("I'm stealing!")
  } ;

  Raccoon.prototype = Object.create(__super.prototype)
  Raccoon.prototype.constructor = Raccoon;

  return Raccoon
})(Mammal)