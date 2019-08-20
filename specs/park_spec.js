const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trike1;
  let trex1;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
    trike1 = new Dinosaur('tricerotops', 'herbivore', 40);
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
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
    const actual = park.allOfSpecies('tricerotops');
    assert.deepStrictEqual(actual, [trike1]);
  });

  it('should be able to remove all dinosaurs of a particular species');

});
