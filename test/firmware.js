var assert = require('assert');

describe("tmk_load", function() {
  var firmware = require("../firmwares/tmk.js");
  var keyboardMock = {
    addMapping: function() {}
  };
  describe("#load keymaps", function() {
    it('should find all 4 keymaps', function(done) {
      firmware.load('./test/tmk.h', function(error, def) {
        if(error) done(error);
        assert.equal(4, def.maps.length);
        done();
      });
    })
  });
  describe("#parse keys", function() {
    it('should find all keys', function(done) {
      firmware.load('./test/tmk.h', function(error, def) {
        if(error) done(error);
        assert.equal(76, def.maps[0].length);
        assert.equal('ESC', def.maps[0][0]);
        done();
      });
    })
  });
});