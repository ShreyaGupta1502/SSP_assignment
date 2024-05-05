var library = [
    {
        "author" : "Bill Gates",
        "title" : "The Road Ahead",
        "readingStatus" : true
    },
    {
        "author" : "Steve Jobs",
        "title" : "Walter Isaacson",
        "readingStatus" : true
    },
    {
        "author" : "Suzzane Collins",
        "title" : "Mockingjay : The Final Book of the Hunger Games",
        "readingStatus" : false
    }
];
for(var i = 0; i<library.length; i++)
{
    var book = library[i];
    console.log("Name : "+book.title);
    console.log("Author : "+book.author);
    console.log("Reading Status : "+book.readingStatus);
}