function getIndexes(string,word)
{
    var indexes = [];
    var index = string.indexOf(word);
    while(index != -1)
    {
        indexes.push(index);
        index = string.indexOf(word,index+1);
    }
    return indexes;
}
const str = "Shreya Is great she loves travelling in India .India is the great country.";
var idxs = getIndexes(str,"India");
console.log("Occurences of India are : "+JSON.stringify(idxs));