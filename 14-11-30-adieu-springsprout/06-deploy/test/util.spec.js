describe('util', function() {
  describe('plus', function() {
    it('should return 3', function() {
      var result = plus(1, 2);
      expect(result).to.equal(3);
    });
  });

  describe('minus', function() {
    it('should return 2', function() {
      var result = minus(5, 3);
      expect(result).to.equal(2);
    });
  });

  describe('times', function() {
    it('should return 6', function() {
      var result = times(2, 3);
      expect(result).to.equal(6);
    });
  });

  describe('divide', function() {
    it('should return 3', function() {
      var result = divide(9, 3);
      expect(result).to.equal(3);
    });
  });
});
