class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
    run ():void {
        alert(this.name)
    }
}
var p = new Person('wrf')
p.run()
