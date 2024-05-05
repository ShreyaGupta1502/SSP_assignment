class Rectangle
{
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
    }
    getArea()
    {
        return this.width*this.height;
    }
    getPerimeter()
    {
        return 2*(this.width+this.height);
    }
}
var rectangle = new Rectangle(20,30);
console.log("Area of the rectangle is : "+rectangle.getArea());
console.log("Perimeter of the rectangle is : "+rectangle.getPerimeter());