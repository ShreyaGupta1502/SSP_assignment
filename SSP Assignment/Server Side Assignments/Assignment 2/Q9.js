function checkIfSorted(arr)
{
    var arrs = [];
    for(var i = 0; i<arr.length; i++)
    {
        arrs.push(arr[i]);
    }
    arrs.sort();
    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] != arrs[i])
            return false;
    }
    return true;
}
const arr = [10,20,30,40,50];
console.log(checkIfSorted(arr));