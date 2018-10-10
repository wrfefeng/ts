var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        alert(this.name);
    };
    return Person;
}());
var p = new Person('wrf');
p.run();
