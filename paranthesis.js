var isValid = function (s) {
    let objects={
    "(":")",
    "{":"}",
    "[":"]",
    ")":"(",
    "}":"{",
    "]":"["
}

if(s.length%2==0){
// console.log("obj",objects.hasOwnProperty(s[i]))
// if (objects.hasOwnProperty(key)) {
// }
for(let i in s){
   console.log("obj",objects.hasOwnProperty(s[i])) 
}
}return false;
}
isValid("()[]{}");
