const Heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello worlds"),
    React.createElement("h2", {}, "hello world2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello world3"),
    React.createElement("h2", {}, "hello world4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);

{
  /* <div id="parent">
    <div id="child">
        <h1>hello worldd</h1>
</div>
</div> */
}
