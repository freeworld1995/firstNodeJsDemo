// var myFunc = require('./functionTest')
//
// console.log(myFunc.combine(15,15));
// console.log(myFunc.minus(15,5));

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var jimmy = new Person('jimmy');
var bach = new Person('bach');
var nga = new Person('nga');

var people = [jimmy, bach, nga];

people.forEach(function(person){
  person.on('speak', function(msg){
      console.log(person.name + ' said: ' + msg);
  });
});

jimmy.emit('speak', 'i love you Nga');
