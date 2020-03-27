var Mammal = (function (__super){
  var height = 50;
  function givesMilk(){
    if(this.sex == "female"){
      console.log("I'm giving milk!")
    }else{
      console.log("I'm not giving milk!")
    }
  }

  function Mammal() {
    __super.call(this)
  }

  Mammal.prototype = Object.create(__super.prototype);
  Mammal.prototype.constructor = Mammal;

  Mammal.prototype.height = height;
  Mammal.prototype.givesMilk = givesMilk;

  return Mammal;
})(Animal);