import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html'
})
export class TypescriptComponent {

}

// types
let isDone: boolean = false;
let decimal: number = 6;
let big: bigint = 100n;
let color: string = "blue";
let array: number[] = [1, 2, 3];

let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure2: any = 4;
notSure2 = "maybe a string instead";
notSure2 = false;
// unknown is the type-safe counterpart of any. Anything is assignable to unknown,
// but unknown isn’t assignable to anything but itself and any without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

let u: undefined = undefined;
let n: null = null;

// Declare a tuple type
let tuple: [string, number];
tuple = ["hello", 10]; // OK

let more: [string, number, string, number, string, number];
more = ["hello", 10, "test", 10, "test", 10]; // OK

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let myEnum: Color = Color.Green;
let myEnum2: string = Color[1]; // Green

// func return type
function helloWorld(): string {
  return "hello world"
}

const helloWorld2 = (): string =>  "hello world";

// void func
function warnUser(): void {
  console.log("This is my warning message");
}

function error(message: string): never {
  throw new Error(message);
}

// void is used when a function doesn't explicitly return anything (meaning implicitly return undefined )
// and never is used when a function does not return at all.

// object is a type that represents the non-primitive type, i.e. anything that is not number,
// string, boolean, bigint, symbol, null, or undefined.
let obj: object;

// casting
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

// union types (string or number)
function padLeft(myVar: string | number) {
  // ...
}

// litral types
type Easing = "var1" | "var2" | "var3";

const animate = (easing: Easing) => {
  //....
}

animate("var1");
// animate("var4"); --> not work

// declare objects - interface
interface Point {
  x: number;
  y: number;
  z?: number; // optional
}

function print(point: Point) {
  return "My point " + point.x;
}

// type alias is like interface
type Point2 = {
  x: number;
  y: number;
  z?: number; // optional
};

function print2(point2: Point2) {
  return "My point " + point2.x;
}

// readonly
interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  /*
  home.resident = {
    //Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
  */
}

// inheritance
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {} // can extend multiple types

const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};

// intersection type
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle2 = Colorful & Circle;

const draw = (circle: Colorful & Circle) => {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// Classes
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

// abstract class
abstract class Person {
  name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  display(): void{
    console.log(this.name);
  }

  abstract find(string): Person;
}

// super
class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name:string): Person {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }
}

let greeter = new Greeter("world");

// access modifiers
/*
The access modifiers supported by TypeScript are:

Protected- All child classes and members have access to them, but the instance does not.
Private- Only members have access
Public- Members, child classes, and instances of the class have access to the public modifier.
 */

class Test {
  private a: string;
  public b: string;
  protected c: string;

  private d() {

  }

  public e() {

  }

  protected f() {

  }
}

// getter setter
class GetterSetter {
  private _a: string;
  private _b: string;


  get a(): string {
    return this._a;
  }

  set a(value: string) {
    this._a = value;
  }

  get b(): string {
    return this._b;
  }

  set b(value: string) {
    this._b = value;
  }
}

const gs = new GetterSetter();
gs.a = "hello";
console.log(gs.a);

// Nullish coalescing
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its
// left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

// generics
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<string> = identity;

// NumType
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};









type Relation = Natural | Orga

class Natural {
  name: string
  naturalField: number
}

class Orga {
  name: string
  orgaField: boolean
}

class Aggreg {
  relation: Relation
}

const aggreg = new Aggreg();
const natural = aggreg.relation as Natural;
natural.naturalField = 10;

const aggreg2 = new Aggreg();
const orga = aggreg2.relation as Orga;
orga.orgaField = true;
