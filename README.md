# Installation
```bash
npm i --save @sundar/form-validator

or

yarn add @sundar/form-validator
```
then
```js
import {function} from '@sundar/form-validator'

or
const {function} = require("@sundar/form-validator")
```
# How to use
```js
const {isEmail} = require("@sundar/form-validator")

const email = "hello@email.com"
const notEmail = "hello"

console.log(isEmail(email)) //true
console.log(isEmail(notEmail)) //false
```
# Methods
* isEmail - check if Email is valid
```js
isEmail("email@email.com") //true
```
* max - check if the characters doesn't above the max length 
```js
max(character,maxvalue) 
```
* min - check if the characters doesn't below the min length 
```js
min(character,minvalue) 
```
* equalLength - check if the characters is equal to given length 
```js
equalLength(character,length) 
```
* dataTypeMatch - check if the [data type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) matches
```js
dataTypeMatch(character,datatype) 
```
* ValidateExtension - check file type input has valid extension
```js
const options = {
  allowedFiles:[".png",".jpg"],//file extension
  fileID:"imageFile"//id of the input file
}
ValidateExtension(options) 
```
* isDate - check if the date is valid 
```js
isDate("mm/dd/yyyy") 
```
* isUrl - check if the url is valid 
```js
isUrl(url) 
```
* isTime - check if the time is valid 
```js
isTime("23:59") 
```
* onlyLetters - return false if the given string contains numbers,symbols,spaces
```js
onlyLetters(string) 
```
* letterAndint - return false if the given string contains symbols,spaces
```js
letterAndint(string) 
```
* sanitizeSymbols - remove the symbols from the given string
```js
sanitizeSymbols(string) 
```
