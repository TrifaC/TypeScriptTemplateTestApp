# TypeScriptTemplateTestApp
This app is develop for Redux and Type Script learning. Also create a template for further development. The project structure is based on the Rehabilitation app.

# Useful Link for Learning
  1. A tutorial of todo using typescript(good to start): https://ts.chibicode.com/todo/
  2. TypeScript for Beginner Programmers(Not check yet): https://github.com/chibicode/TypeScript-for-Beginner-Programmers
  3. Redux official guide (Boring): https://redux.js.org/tutorials/fundamentals/part-1-overview

# Note from Learning

## 1. Tutorial of Todo Using TypeScript
  - define a `type` to make sure that out input and output from a function is correct.
  - use readonly(`Readonly<'Object'>`) to make sure that the object's properties are not modified.
    - `Readonly<'Object'>` make whole object is readonly which like the map function in the javascript.
    - `Readonly<'Object'>` is for object, if we want to make the list is readonly, please use "`readonly Todos[]`"
  - **Literal types**: You can use exact values when specifying a type. This is called literal types.
    - The value is fixed forever if th object is readonly.
  
  ```typescript
  // Returns an array where "done" is all true
  function completeAll(
    todos: readonly Todo[]
  ): CompletedTodo[] {
    // ...
  }
  ```

  - The Above example is using a `CompletedTodo` (which is a literal type) to output a fix `done` value object list.
  - **Intersection types**: deduplicate the properties in two types
    - Like the && boolean operators, this one is tyep operators to combine two types.

# *It may useful if you want to add sth into this README*
  - Basic formatting syntax: https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax