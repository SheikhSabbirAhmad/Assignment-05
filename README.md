# PH-Assignment-05 Questions and Answers

This document contains important JavaScript DOM questions and answers, including element selection, DOM manipulation, api handling, and event handling.

---

## Question 01: What is the difference between `var`, `let`, and `const`?

| Feature | var | let | const |
|------|------|------|------|
| Scope | Function scope or Global scope | Block scope | Block scope |
| Update | Can be updated | Can be updated | Cannot be updated |
| Re-declare | Can be re-declared | Cannot be re-declared | Cannot be re-declared |
| Initialization | Can be declared without initialization | Can be declared without initialization | Must be initialized |
| Access before initialization | Returns `undefined` | ReferenceError | Not allowed |
| Hoisting | Hoisted | Hoisted but in Temporal Dead Zone | Hoisted but in Temporal Dead Zone |


## Question 02: What is the Spread Operator (`...`)?

The spread operator (`...`) in JavaScript is used to expand elements of an array or object into individual elements.

### Spread with Array

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

Output:

```
[1, 2, 3, 4, 5]
```

### Spread with Objects

```javascript
const person = {
  name: "John",
  age: 25
};

const newPerson = {
  ...person,
  country: "USA"
};

console.log(newPerson);
```

Output:

```
{name: "John", age: 25, country: "USA"}
```

---

## Question 03: What is the difference between `map()`, `filter()`, and `forEach()`?

| Method | Purpose | Return Value | Use Case |
|------|------|------|------|
| map() | Transform each element | Returns a new array | Modify every element |
| filter() | Select elements based on condition | Returns a new array | Select some elements |
| forEach() | Loop through array | Returns nothing | Run code only |

Example:

```javascript
const numbers = [1,2,3,4];
```

### map()

```javascript
numbers.map(n => n * 2);
// [2,4,6,8]
```

### filter()

```javascript
numbers.filter(n => n > 2);
// [3,4]
```

### forEach()

```javascript
numbers.forEach(n => console.log(n));
// prints: 1 2 3 4
```

---

## Question 04: What is an Arrow Function?

An Arrow Function is a shorter syntax for writing functions in JavaScript. It uses the `=>` symbol.

### Normal Function

```javascript
const add = function(a, b) {
  return a * b;
};
```

### Arrow Function

```javascript
const add = (a, b) => a * b;
```

---

## Question 05: What are Template Literals?

Template literals allow you to create dynamic strings using backticks (` `).

Example:

```javascript
const name = "Kabir";
const age = 25;
const city = "Dhaka";

const message = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

console.log(message);
```

Output:

```
My name is Kabir, I am 25 years old, and I live in Dhaka.
```

---

## Author

**Sheikh Sabbir Ahmad**