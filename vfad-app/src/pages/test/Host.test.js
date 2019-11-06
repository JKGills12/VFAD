const assert = require('assert');

// Describe tests
describe('Saving records', function () {

  // Creates tests
  it('Saves a record to the database', function (done) {

    const host = new UserHost
    name: ''
  });

  host.save().then(function () {
    assert(host.isNew === false);
    done();
  });


});