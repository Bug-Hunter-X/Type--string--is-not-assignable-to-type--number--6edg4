# Type 'string' is not assignable to type 'number'
This TypeScript code demonstrates a common type error: assigning a string to a number variable.

## Bug Report
The function `greeter` expects a string argument, but the `user` variable is an array containing both a string and a number.  This causes a type error when trying to pass `user` to `greeter`.