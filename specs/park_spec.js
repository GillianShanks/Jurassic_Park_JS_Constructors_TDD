const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trike1;
  let trex1;
  let trex2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
    trike1 = new Dinosaur('triceratops', 'herbivore', 40);
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 45);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(trike1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trike1])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(trike1);
    park.removeDinosaur(trike1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(trike1);
    park.addDinosaur(trex1);
    const actual = park.mostGuestsAttracted();
    assert.deepStrictEqual(actual, trex1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(trike1);
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    const actual = park.allOfSpecies('triceratops');
    assert.deepStrictEqual(actual, [trike1]);
    const actual2 = park.allOfSpecies('t-rex');
    assert.deepStrictEqual(actual2, [trex1, trex2])
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(trike1);
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.removeDinosaurSpecies('t-rex');
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trike1])
  });

  it('should calculate the total number of visitors per day', function (){
    park.addDinosaur(trike1);
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    const actual = park.visitorAverageDaily();
    assert.strictEqual(actual, 135);

  });

  it('should calculate the total number of visitors per year');

  it('should calculate the total revenue per year')

});
