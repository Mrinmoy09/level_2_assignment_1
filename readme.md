## 1. What is TypeScript, and how is it different from JavaScript?

TypeScript is a programming language that is a superset of JavaScript. It adds additional capabilities to JavaScript, such as optional static typing, class, and interface declarations, making it more structured and scalable for large applications. TypeScript code is translated to pure JavaScript, which may then be run in any browser or JavaScript environment. The fundamental difference between TypeScript and JavaScript is that TypeScript includes type declarations and additional language features that help in error detection at compile time, whereas JavaScript is a dynamically-typed language that finds errors when executed.

## 2. Can you explain the difference between "interface" and "type" in TypeScript?

Both "interface" and "type" may be used to define custom types in TypeScript, although "interface" is used for JavaScript objects such as arrays, objects, and functions, "type" can specify any type. "interface" can be expanded as well, and "type" can be used to create aliases for existing types.

## 3. Can you give an example of how to use generics in TypeScript?

function check<T>(arg: T): T {
return arg;
}

let result1 = check<string>("hello");
let result2 = check<number>(42);

The check function in this illustration accepts a type parameter T and returns a result of the same type. TypeScript infers the type of the result based on the type of the argument when the function is called with arguments of different kinds (string and number). Generics allow us to create reusable code that can operate on a variety of data types.

## 4. What is the difference between an "unknown" and "any" type in TypeScript?

In TypeScript, "any" represents any type and allows for any operation to be performed on it. It is extremely flexible and can contain any value or data type, but it also compromises the type safety of the code.However, "unknown" is a more secure option than "any". It likewise represents any type, but the difference is that unless you specify an additional type using a type guard or a type assertion, you can't do anything with it.

## 5. Can you give an example of how to use enums in TypeScript?

    enum CoffeeSize {
    Small = 'S',
    Medium = 'M',
    Large = 'L'
    }
    function orderCoffee(size: CoffeeSize) {
    console.log(`Order received for a ${size} coffee`);
    }

    orderCoffee(CoffeeSize.Medium);

    A collection of related constants create an enum. Here, the CoffeeSize enum includes three constants with the string values "S," "M," and "L," respectively: Small, Medium, and Large. The CoffeeSize type argument, which is required by the orderCoffee function, limits the range of possibilities to those listed in the enum. The orderCoffee function is then called with the parameter CoffeeSize.Medium, which will print "Order received for an M coffee" to the console.
