const Park = function(name, price){
  this.name=name;
  this.price=price;
  this.dinosaurs=[];
};

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

module.exports = Park;
