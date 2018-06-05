# AppMan Node.js Test ( Nikhom Suksamer )


### Problem 03

We need to transform any positive number to 1 step by step with 2 rules as below:

1.  if number is even, must be transformed to (number / 2)
2.  if number is odd, must be transformed to either (number + 1) or (number - 1)

Please find min of step(s) to transform given number to 1.

```javascript
> const { minStep } = require('./min-step')
> minStep(5) // 3 steps (n-1) to 4, (n/2) to 2, and (n/2) to 1.
3
>
```

### How to

#### First Install

```javascript
> npm install
```

#### Run app

```javascript
> npm run dev
```
#### Run Test

```javascript
> npm run test
```