function getIndex(string,char)
{
    for(var i = 0; i<string.length; i++)
    {
        if(string.charAt(i) == char)
            return i;
    }
    return -1;
}
const str = "Shreya is great she loves travelling in India. India is the great country.";
var idxs = getIndex(str,"I");
console.log("Occurence of I is : "+idxs);