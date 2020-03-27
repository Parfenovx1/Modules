var Mammal = (function (__super){
  function Mammal() {
    __super.call(this)
  }
  Mammal.height = 50;
  Mammal.givesMilk = function(){
    if(this.sex == "female"){
      console.log("I'm giving milk!")
    }else{
      console.log("I'm not giving milk!")
    }
  }

  Mammal.prototype = Object.create(__super.prototype);
  Mammal.prototype.constructor = Mammal;

    return Mammal;
})(Animal);
  