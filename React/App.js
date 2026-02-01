// hello world
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!",
);
console.log("heading", heading); // this will return an object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Root", root);
root.render(heading); // this will render the heading on the screen
console.log(root.render(heading));

/* Explanation of the below code:
 * <div id="parent">
 *    <div id="child">
 *        <h1 ></h1>
 *    </div>
 * </div>
 * ReactElement(object) => React.createElement() => HTML(DOM) => HTML(Browser Understanding)
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag"),
  ),
);

console.log("parent", parent);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);

/* If need to have siblings
 * <div id="parent">
 *    <div id="child1">
 *        <h1>I am h1 tag</h1>
 *        <h2>I am h2 tag</h2>
 *    </div>
 *  </div>
 */
const parent11 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Slibling h1 tag"),
    React.createElement("h2", {}, "I am Sibling h2 tag"),
  ]),
);
console.log("parent11", parent11);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent11);

/*
Now lets create the same like 
<div id="parent">
*    <div id="child1">
*        <h1></h1>
*    </div>
*    <div id="child2">
*        <h1>I am Sibling h1 tag</h1>
*        <h2>I am Sibling h2 tag</h2>
*    </div>
* </div>
*/

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I am H1 tag in child1"),
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am Sibling h1 tag in child2"),
    React.createElement("h2", {}, "I am Sibling h2 tag in child2"),
  ]),
]);
const parentSbling = ReactDOM.createRoot(document.getElementById("parentSibling"));
parentSbling.render(parent2);

// the above structure is more complecated . so we write in JSX way 