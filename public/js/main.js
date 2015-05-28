
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

// модель однієї людини
var Person = Backbone.Model.extend({
    defaults:{
        name: 'Andrey',
        age: 32,
        job: 'ThinkMobile, javascript developer'
    },
// не працює валідите автоматично як в уроці зате працює person.isValid
// також знайшов на стеку http://stackoverflow.com/questions/14426155/backbone-validate-does-not-work
    //var person = new Person({name: 'Николай',age:31, jobb: 'Веб-разработчик'},{validate:true});
    //{validate:true}
    validate: function( attrs){
      console.log('Валідація', attrs);

        if (attrs.age <0) {
            return 'Возраст должен быть положительным!';
        }

        if ( !attrs.name ) {
            return 'Чувак, ты же не думаешь, что у персоны не может быть имени?';
        }
    },
    work: function () {
        return this.get ('name') + ' is working';
    }
});
// список людей
var PeopleCollection = Backbone.Collection.extend({
model: Person
});

// вид, відображення однієї людини
var PersonView = Backbone.View.extend({
    initialize: function () {
console.log('Екземпляр класа створено',this.model);
    },
    tagName:'li',
    className:'myClass',
    id:'HeroID',
    //template: _.template($('#person-id').html()),
// варіант 2
    template:'#person-id',

    render: function(){  //відповідає за наповнення документа ХТМЛ кодом
        console.log('Запустили Рендер');
      // qце антипаттерн, так працювати не треба краще шаблонами
       // this.$el.html(this.model.get('name')+ ' (' + this.model.get('age') + ' ) - ' + this.model.get('job'));
        //this.$el.html(this.template(this.model.toJSON()));
        //варіант 2
        var template = _.template($(this.template).html());
        this.$el.html(template(this.model.toJSON()));
    }
});

// при роботі з колекцією в ручну дані не передають
//var person = new Person;
//var personView = new PersonView({model:person});
//
//var person2 = new Person({name: 'Gogi', age:25});
//var personView2 = new PersonView({model:person2});

var peopleCollection = new PeopleCollection([
    {
        nsme: 'Olgs',
        age: 20,
        job:'Reception'

    },
    {
        nsme: 'Ira',
        age: 30,
        job:'HR'

    },
    {
        nsme: 'Roman',
        age: 32,
        job:'IT coach'

    }
]);

// при роботі з колекцією в ручну дані не передають
//peopleCollection.add(person);
//peopleCollection.add(person2);

//console.log(Backbone);
/* in Google console
 var person = new Person
 person.walk()
 person.get('age')
 person.set('name','Ira')
 * person.toJSON()
 * work: function() {
 return this.get('name') + ' is working.';

це не працює краще дивитися валідийт ерор
  person.on('error', function(model, error){
 console.log(error);
 };
щоб пройшло валідацію треба ставити опції
 person.set({'age': -1},{validate: true});
 *
 * personView.$el
 * $(document.body).append(personView.el)
 * var model = peopleCollection.at(1)
 */// model.set('name','Taras');