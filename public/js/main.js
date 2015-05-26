
//var App = App ||  {  };
//var Person = function (config){
//    this.name = config.name;
//    this.age = config.age;
//    this.job = config.job;
//};
//
//Person.prototype.walk = function(){
//    return this.name + ' is walking';
//  };
//
//Person.prototype.officeAddres = 'Uzhgorod';


//var nick = new Person({name:'Andrey', age:24, job:'Javascript backend'})
//require.config({
//    paths: {
//        jQuery: './libs/jquery',
//        Underscore: './libs/underscore',
//        Backbone: './libs/backbone'
//    },
//    shim: {
//        'Backbone': ['Underscore', 'jQuery'],
//        'app': ['Backbone']
//    }
//});
//
//require(['app'], function(APP){
//
//});

var Person = Backbone.Model.extend({
    defaults:{
        name: 'Andrey',
        age: 32,
        job: 'ThinkMobile, javascript developer'
    },
    walk: function () {
        return this.get ('name') + ' is walking';
    }

});
//console.log(Backbone);
/* in Google console
 var person = new Person
 person.walk()
 person.get('age')
 person.set('name','Ira')
 * person.toJSON()
 *
 *
 */