describe('getQuote', function(){
  it('should return a string as a quote', function(){
    var quote = getQuote();
    expect(typeof quote.quote).to.equal("string");
  });
});
