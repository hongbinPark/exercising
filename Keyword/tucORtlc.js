var 고칠문자열 = "hELlo THERE, hOW ARE yOu doINg?";
var 소문자 = 고칠문자열.toLowerCase();
undefined
var 첫글자대문자 = 소문자.toUpperCase(0);
var 완성된문장 = 첫글자대문자 + 소문자.slice(1);
console.log('1', 완성된문장);
var 첫글자 = 소문자[0];
var 첫글자대문자 = 첫글자.toUpperCase();
var 완성된문장 = 첫글자대문자 + 소문자.slice(1);
console.log('2', 완성된문장);
