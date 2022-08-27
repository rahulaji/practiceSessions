var moni={
    books:["chemistry","physics","maths"]
};
var nisha={sharpner:"apasara"}
var dinesh={eraser:"natarj"}
Object.setPrototypeOf(moni,nisha)
Object.setPrototypeOf(nisha,dinesh)
console.log(moni.sharpner)
console.log(moni.eraser)
console.log(nisha.eraser)
console.log(moni.__proto__)
console.log(moni.toString)


let karnan=["a","b","c","d","e"]
karnan.push("f","g")
console.log(karnan)



const love="beerlion";
const love1=Array.from(love);
console.log(love1)



const king=["beer","lion"];
const love2=king.join("~~")
console.log(love2)









const dogs=["blakdog","whitedog","browndog"];
const cats=["blackCat","whiteCat","brownCat"];
const pets=dogs.concat(cats);
console.log(pets)




var savings=["10","100",200,[[300]],[[[[10_00_00_00_000]]]]]
var loot=savings.flat(3);
console.log(loot);





var food=["apple","orange","bannana"];
var caught=food.includes("apple");
var caught2=food.includes("grapes");
console.log(caught);
console.log(caught2);







const firstNameFamily=["Shanthi","Nisha","Rahul"]
const familyName=firstNameFamily.map((m)=>m+ "Uthayakumar");
console.log(familyName);




const num=[10,20,15]
const square=num.map((m)=>m*m);
console.log(square);











const avengers=[
    "hulk",
    "iron Man",
    "captain America",
    "spider Man",
    "thor"
   ];
   const moviesLength=avengers.map((m)=>m.length);
   console.log(avengers,moviesLength);
   console.log(avengers.join(", "));

   
   

   const demoNum=[2,4,6,7,8,9];
   filterNum=demoNum.filter((m)=>m/2==1);
   console.log(filterNum);


const marks=[90,50,69,40,32,22,15,99,89,45,23,27];
const passedMarks=marks.filter((m)=>m>=40);
const failedMarks=marks.filter((n)=>n<=40);
const below50=marks.filter((j)=>j<=50);
console.log(marks,passedMarks);
console.log(failedMarks);
console.log(marks.length);





const student=[
    {
        name:"abishek",
        marks:24,
    },
    {
        name:"bavish",
        marks:56,
    },
    {
    name :"chandran",
    marks:10,
    },
    {
        name:"dinesh",
        marks:34,
    },
    {
        name:"jk",
        marks:67,
    },

];
const nametype=student.map((k)=>k.name)
const marklist=student.map((ma)=>ma.marks)
const passedStudents=student.filter((pass)=>pass.marks>=40)
console.log(nametype)
console.log(marklist)
console.log(passedStudents)
const passedStudentsNames=passedStudents.map((passedNames)=>passedNames.name)
console.log(passedStudentsNames)


let num16=[22,1,3,45,32,67,76,76,78,54,33]
const multiple=num16
.map((sum)=>sum+sum)
.map((multiple1)=>multiple1*multiple1)
.map((divisible)=>divisible/2)
.filter((filters)=>filters<40)

console.log(multiple)





const sum=[1,2,3,4,5,6,7].reduce((acc,curr)=>acc+curr);
console.log(sum)


//Average


const student1=[
    {
        name:"abishek",
        marks:14,
    },
    {
        name:"bavish",
        marks:15,
    },
    {
    name :"chandran",
    marks:8,
    },
    {
        name:"dinesh",
        marks:7,
    },
    {
        name:"jk",
        marks:54,
    },

];

const total=student1
.map((avgmap)=>avgmap.marks)
.reduce((acc,curr)=>acc+curr,0)
const avg=total/student1.length;
console.log(total,"the average is "+ avg.toFixed(7));