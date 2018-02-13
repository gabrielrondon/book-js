# Chapiter: ES6
## What is ES6?
ES6 means EcmaScript which you can define as the official name for the programming language as we know as *JavaScript*. It is not important to talk about the history of the name of this programming language. You can find this in the beginning of the book.
ECMAScript is the standard. Javascript is the implementation of this standard. ES6 is the 6th version of ECMAScript.

## Arrow Functions

If we want to make a very simple program in which it calculates by multipling two given numbers, we can easily written this:

```javascript
const a = 2;
const multiply = function(num) {
  return num * a;
}

console.log(multiply(3));
```

But we have another way to make that, which can be considered more simple. Using the **Arrow Functions**:
```javascript
const a = 2;
const multiply = num => num * a;

console.log(multiply(3));
```

## Class
To create a class just use the `class` keyword:
```javascript
class Rectangle {
	constructor(height, width) {
	this.height = height;
	this.width = width;
	}
}
```

There are some methods which we could use when we are working with classes. We are going to explain each one of them and give an example of it.
### constructor()
Constructors are

````javascript
class MySelf {
	constructor (name, age, hobby) {
		this._name = name;
		this._age = age;
		this._hobby = hobby;
	}
	
	getName() {
		return this._name;
	}
	
	getAge() {
		return this._age;
	}
	
	getHobby() {
		return this._hobby;
	}
	
	setName() {
		this._name = name;
	}
	
	setAge() {
		this._Age = age;
	}
	
	setHobby() {
		this._hobby = hobby;
	}
}
````

### getters/setters

...

### super

...

### static

...

### Inheritance (extends)

....