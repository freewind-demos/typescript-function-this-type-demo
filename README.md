TypeScript Function "this" Type Demo
====================================

有时候为了兼容javascript写法，在一个函数中需要使用`this`关键字。

做法是给方法或者函数增加一个额外的“第1个”参数，其名为`this`，类型可以指定。

但是发现这种做法，对于依赖于某个对象的方法有用。如果是一个单纯的函数，虽然可以声明，但没法用，
传进去的`this`是undefined

```
npm install
npm run demo
```
