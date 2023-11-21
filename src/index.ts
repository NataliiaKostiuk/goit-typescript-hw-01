const names: string = 'Kate';
let age: number = 20;

//[]
const arr: number[] = [1, 5, 6, 7, 8];

//{}
const odj: { movie: string, genre: string, id: number | string } = {
    movie: 'Avatar',
    genre: 'fantasy',
    id: 123,
}

type User = {
    fullName: string;
    email: string;
    phone: number;
}
const validUser: User = {
    fullName: 'Kateryna',
    email: 'bbnvvbncv124@gmail.com',
    phone: 1235469,
}
// any enum
//function
function add(a: number, b: number): number{
    return a + b;
}
add(5, 10)

function onClick(a: number, b: number): void{
    a + b
}
onClick(2, 3)


type Cars = {
    title: string;
    color: string;
    price: number;
    currency?: string;
 
}

 const car: Cars = {
    title: 'BMW',
    color: 'black',
    price: 10000,
    }
