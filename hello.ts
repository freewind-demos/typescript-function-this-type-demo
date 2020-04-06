type Hello = {
  name: string,
  hello: (this: Hello) => void;
}

const user: Hello = {
  name: 'typescript',
  hello: function (this: Hello) {
    console.log(`Hello, ${this.name}!`);
  }
}

user.hello()

// FIXME can't do this to a function
// const fn = function (this: any, message: string) {
//   this.message = message;
// };
// fn('test')
// console.log((fn as any).message);

