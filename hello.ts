type HelloType = {
  name?: string
}

function hello(this: HelloType, name: string): void {
  this.name = name;
  console.log(`Hello, ${this.name}!`);
}

// FIXME how to call it?
hello('typescript');
