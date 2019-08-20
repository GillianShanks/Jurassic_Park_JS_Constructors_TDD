const Park = function(name, price){
  this.name=name;
  this.price=price;
  this.dinosaurs=[];
};

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index,1);
};

Park.prototype.mostGuestsAttracted = function () {
  let topDinosaur = this.dinosaurs[0];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > topDinosaur.guestsAttractedPerDay){
      topDinosaur = dinosaur;
    };
  };
  return topDinosaur;
};

Park.prototype.allOfSpecies = function (species) {
  let speciesGroup = [];
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species === species){
      speciesGroup.push(dinosaur);
    };
  };
  return speciesGroup;
};

module.exports = Park;
