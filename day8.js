//1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//  a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//  b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//  c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//  d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    display (){
       console.log(`${this.title},${this.studio},${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getgetPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
   let Movie1=new movie("jersey","aaa")
   Movie1.display()
  let Movie2=new Movie("shaoo","xxxx","PG")
  let Movie3=new Movie("manam","anapurna","pG")
  let Movie4=new Movie("bahubali","xxxx","pG")
  let film=new Movie("Casino Royale","Eon Productions","PG13")
 film.display()
  let arr=[]
   arr.push(Movie1.movieobject())
   arr.push(Movie2.movieobject())
   arr.push(Movie3.movieobject())
   arr.push(movie4.movieobject())
   console.log(arr)
   
// output:
// sye, xxxx, PG
// Casino Royale, Eon Productions, PG13
// [ { title: 'sye', studio: 'xxxx', rating: 'PG' },
//   { title: 'manam', studio: 'anapurna', rating: 'PG' },
//   { title: 'anubavinchuraja', studio: 'anapurna', rating: 'RR' } ]
// [ 'sye', 'manam' ]
//2.Convert the UML diagram to Typescript class. - use number for double

class Circle{
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
        return `"Area of circle is" ${area}`
    }
   getCircumference(){
       let circum=(2*3.14*this.getRadius()).toFixed(2)
       return `"Circumference of circle is" ${circum}`
   }
   display(){
       let str =  `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
       return str;
   }
}
let circle1=new Circle();
let circle2=new Circle("red")
let circle3=new Circle(3,"green")
circle1.setRadius(6)
circle1.setColor("white")
circle2.setRadius(9)
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())
//output:
// [ radius : 6 , color : white]
// [ radius : 9 , color : red]
// "Area of circle is" NaN
// "Circumference of circle is" NaN

// 3.Write a “person” class to hold all the details.
class Person{
    constructor(name,heigth,weigth,age,colour,qualification,city){
        this.name=name;
        
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}`)
    }
}
let Person1=new Person("sri","5.8","70","23","black","B.tech","nellore")
Person1.details()
// output:
//         name:sri
//         height:5.8
//         weight:70
//         age:23
//         color:black
//         qualification:B.tech
//         city:nellore
//4.write a class to calculate uber price.
class UberPrice {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new UberPrice(10);
  console.log(uber.getPrice());
//output:200
