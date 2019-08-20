const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let trike;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
    trike = new Dinosaur('tricerotops', 'herbivore', 40);
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
    park.addDinosaur(trike);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trike])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(trike);
    park.removeDinosaur(trike);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
