var quotes = [{
  quote: 'Get your facts first, then you can distort them as you please.',
  author: 'Mark Twain'
},{
  quote: "We are all here on earth to help others; what on earth the others are here for I don't know.",
  author: 'W. H. Auden'
},{
  quote: 'When I die, I want to go peacefully like my grandfather did: in his sleep. Not yelling and screaming like the passengers in his car.',
  author: 'Bob Monkhouse'
},{
  quote: 'Those people who think they know everything are a great annoyance to those of us who do.',
  author: 'Isaac Asimov'
},{
  quote: "In Seattle, they have a saying: If you don't like the weather, wait five minutes and then shoot yourself in the face.",
  author: 'Doug Benson'
},{
  quote: 'Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.',
  author: 'Albert Einstein'
},{
  quote: "At what age do you think it's appropriate to tell a highway it's adopted?",
  author: 'Zach Galifianakis'
},{
  quote: 'I always wanted to be somebody, but now I realize I should have been more specific.',
  author: 'Lily Tomlin'
},{
  quote: 'Any kid will run any errand for you, if you ask at bedtime.',
  author: 'Red Skelton'
},{
  quote: "I have not failed. I've just found 10,000 ways that won't work.",
  author: 'Thomas A. Edison'
},{
  quote: "I've always wanted to go to Switzerland to see what the army does with those wee red knives.",
  author: 'Billy Connolly'
}];

var seen = [];

var getQuote = function() {
  var num;
  while (true)  {
    num = Math.floor(Math.random()*quotes.length);
    if (seen.length > 3) {
      seen.shift();
    }
    if (seen.indexOf(num) === -1) {
      seen.push(num)
      return quotes[num];
    }
  }
}

$(document).ready(function(){
  $('form#quoteMe').submit(function(event){
    event.preventDefault();
    var quote = getQuote();
    $('#quoteText').text(quote.quote);
    $('#quoteAuthor').text(quote.author);
  });
});
