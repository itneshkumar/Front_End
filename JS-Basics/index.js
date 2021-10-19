// //comment, This is my first java scripts
// console.log('Hello World');
// // you can define the variable by var or let
// let name ='itnesh';
// // now log the statement by console.log
// console.log(name);
// //do not use the reserved keyword
// //varriable should be meaningful name
// //cann't start with number(1name)
// //cann't contain space and hyphen(-)
// //use cammel notation like 
// let firstName;
// //it is case sensitive
// let firstName;
// let FirstName;
// //these two variable are different 
// // you can also define the variable name by the , of manny variable name like
// let first='itnesh', last='kumar';
// let interestRate = .3;
// interestRate=1;
// console.log(interestRate);
//you can reassign but when you use the constant
// const interestRate=2;
// interestRate=3;
// console.log(interestRate);
//you can show the error cann't again reassign the constant like tupple you can't reassign


// let name='Mosh'; //string Literal
// let age=30; // number literal
// let isApproved=true; //Boolean literal (ture or false)
// // let firstName; //these are two variable is called undefined variable
// let firstName=undefined;
// let lastName=null; //null value
// //if you want to reassign in future of any value then null value is play vital role
// let selectColor=null; //in future like red and green
//This is dynamic language
// static typed language cann't be changed in future of variable values where as dynamic typed language can be change as per requirement 

//person object with two properties
// let person={
//     name: 'itensh', age:25

// };
// console.log(person);
// // dot notation
// person.age=23;
// //bracket notation
// person['name']='man';
// console.log(person.name);
// //or
// let selection='name';
// person[selection]='kumar';
// console.log(person.name);
//array
let selectColor=['red','black'];
console.log(selectColor);
console.log(selectColor[1]);
selectColor[2]='green';
console.log(selectColor);
console.log(selectColor.length);

// function
function greet() {
    console.log('Hello World');

}
greet();
//performance task
function greet(name) {
    console.log('Hello'+ name);

}
greet(' john');
greet(' marry');
//calculating value
function square(number){
    return number*number;
}
let num=square(4);
console.log(num);
console.log(square(3));

