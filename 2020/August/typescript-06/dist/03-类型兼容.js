class Person {
    study() {
    }
    fly() { }
}
class Cat {
    catchMouse() { }
    fly() { }
}
let a1 = new Person();
let c1 = new Cat();
// function fn(arg: Person) {
//     arg.name;
// }
// fn( c1 )
function fn0(arg) {
    arg.fly();
}
fn0(a1);
fn0(c1);
