describe('getQuote', function(){
  it('should return a string as a quote', function(){
    var quote = getQuote();
    expect(typeof quote.quote).to.equal("string");
  });
  it('should not return the same string twice in a row', function(){
    var quote = getQuote();
    var quote2 = getQuote();
    expect(quote.quote).to.not.equal(quote2.quote);
  });
  it('should not return a quote seen in the previous three shown quotes', function(){
    var quote = getQuote();
    var quote2 = getQuote();
    var quote3 = getQuote();
    var quote4 = getQuote();
    expect(quote.quote).to.not.equal(quote2.quote);
    expect(quote.quote).to.not.equal(quote3.quote);
    expect(quote.quote).to.not.equal(quote4.quote);
    expect(quote2.quote).to.not.equal(quote3.quote);
    expect(quote2.quote).to.not.equal(quote4.quote);
    expect(quote3.quote).to.not.equal(quote4.quote);
  });
});
