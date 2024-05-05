function isRegExp(value)
{
    return value instanceof RegExp;
}
console.log(isRegExp(/Shreya/));
console.log(isRegExp(new RegExp('Shreya')));
console.log(isRegExp('Shreya'));
