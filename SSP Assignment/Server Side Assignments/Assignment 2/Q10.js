function checkIfNull(val)
{
    return typeof(val) == "undefined";
}
var a;
console.log(checkIfNull(a));
a = 10;
console.log(checkIfNull(a));