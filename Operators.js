// operator => its a symbol in javascript
// there are used to perform the operations and operands

// 1. Arithmetic Operator  => Arithmetic operation are used to perform  mathematical operation on operand

console.log("----------------Arithmetic Operator-------------------")

// a. Addition  

let a = 10;
let b = 20;
let c = a+b;
console.log("Addition of two numbers",c);

// b. subtraction

let d = a-b;
console.log("subtraction of two numbers", d);

// c. Multiplication

let e = a*b;
console.log("Multiplication two numbers", e)


//d. division
let f = a/b;
console.log("division two numbers", f);

//e. mudulo

let g = a%b;
console.log("mudulo two numbers", g);

//f. Exponentiation

let h = a**b;
console.log("Multiplication two numbers", h)   // 10^20

// 2. Assignment Operation(=)  => Its used to assign the value to variable

console.log("------------------Assignment Operation-------------------")

let x = 5;

x += 3  // x = x+3 => x = 5+3
console.log(x)

x -= 3  // x = x-3 => x = 5-3
console.log(x)

x *= 3  // x = x*3 => x = 5*3
console.log(x)

x /= 3  // x = x/3 => x = 5/3
console.log(x)

x **= 3  // x = x**3 => x = 5+**3
console.log(x)

// 3. Increment (++)/ Decrement(--) Operators  => the Increment and decrement operator used to increase or decrease the value of a variable 1.

console.log("----------------3. Increment (++)/ Decrement(--)-----------------")

// there are used two ways prefix and postfix
// 1. Prefix(++i)  => the value of variable is increased before it is used
console.log("----prefix (++i)----")

let y = 10;
console.log("increment the elements before the operands",++y)
console.log(y)


console.log("decrements the elements before the operands",--y)
console.log(y)

console.log("----Postfix (i++)----")

console.log("increment the elements after the operands",y++)
console.log(y)


console.log("decrements the elements after the operands",y--)
console.log(y);

// 4. comparison operator => its compare two values and give back a boolean value: true or false
//its useful in decision-making and looping condition is javascript


console.log("------------------- comparison operator -----------------------")
// <(less than)
// >(grater than)
// =(equal to)
// <=(less than eqaul to)
// >=(grater than  equal to)

// ==(equal check)
// !=(not equal or inequal)
// ===(strict equality checking) (check tha data types and number) 
// !==(strick inequality) (check the datatype)


let p = 10
let q = 20

console.log(p < q);  // true
console.log(p > q);  // false
console.log(p <= q);  // true
console.log(p >= q);  // false 

console.log(p == q);  // false
console.log(p != q);  // true

let r = '10'
console.log(p === q);  // false
console.log(p !== q);  // true

console.log(p === r);  // false
console.log(p !== r);  // true

//  5. logical operator => logical operator perform the logically

console.log("-----------------logical Operator--------------------");

// AND (&&),
// OR (||),
// NOT (!)

// a. AND(&&) => its true is all condition is true

// true && true // true
// true && false // false
// false && true // false
// false && false // false

console.log("---AND(&&) when all condition is true then its true---")

let s = 10;
let t = 20;

console.log(s > 0 && t > 0);  // true
console.log(s < 0 && t > 0);  // false
console.log(s > 0 && t < 0);  // false
console.log(s < 0 && t < 0);  // false

// b. OR (||) => its true when at least one condition is true

console.log("----OR (||) => its true when at least one condition is true ----")

// true || false // true
// false || true // true
// true || true // true
// false || false // false

let m = 10
let n = 5;

console.log(m > 0 || n < 0) // true
console.log(m < 0 || n > 0) // true
console.log(m > 0 || n > 0) // true
console.log(m < 0 || n < 0) // false

// c. NOT (!) => when condition is true then its false and vise versa

// !true // false
// !false // true

console.log("----- NOT (!) => when condition is true then its false and vise versa---- ");

let Yes = true;
let No = false
console.log(!Yes) // false
console.log(!No) // true


// 6. String Operator => we can also use the operator to concatenate (join) two or more string

console.log("-------------------String Operator => its add the two or more strings ----")

console.log("Aishu and " + "Raji" + " are friends")

let nam1 = "Keerthana";
let nam2 = "Child";
console.log(nam1 + " is a " + nam2)

let num ="Hello Welcome to";
num += " Javascript World"
console.log(num)















