function greet(name:string) :string // This string shows that the return type should also come as string . 
{
    return `Hello ${name}`; //This is where TypeScript is going to write the latest version of code possible. 
}

console.log(greet("hitesh"));
console.log(greet(42));