// Hello TypeScript
/*
const ergPlus = "1"+1;
const ergMinus = "1"-1;

console.log(ergPlus);
console.log(ergMinus);
*/


export const ergPlus:number = parseInt("1")+1;
const ergMinus:number = parseFloat("1")-1;

console.log(ergPlus);
console.log(ergMinus);

//type inference
let iLikeTypeScript = true;

//iLikeTypeScript = 5;
//iLikeTypeScript = "no I want to be able to change the type of a variable from boolean to string, just to annoy my collegues";

let iLikeExplicitTyping:boolean = true;

let theLastBasicType:string = "is a string :)";

//now let's define an array
const Peter = 5;

let myArrayOfNames: string[] = [
    "Paul",
    "Peter",
    "Karl"
];

function greeter(names:string[]){
    names.forEach(name => console.log("Hello "+name))
}

greeter(myArrayOfNames);

//very good for the colorpicker

/*
enum Color {r,g,b}
let colorOfColorPicker:Color = Color.r;
*/
enum Color {r="red",g="green",b="blue"}
let colorOfColorPicker:Color = Color.r;

console.log(colorOfColorPicker);

