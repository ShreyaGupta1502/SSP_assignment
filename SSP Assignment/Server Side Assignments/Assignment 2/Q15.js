function clock()
{
    var date = new Date();
    console.log(date.toTimeString());
    setTimeout(function()
    {
        clock();
    },1000);
}
clock();