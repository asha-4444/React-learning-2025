let heading = React.createElement("h1",{id:"heading"},"Hello World From React")

let parent=React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"am h1 element"),React.createElement("h2",{},"am h2 element")]
),React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"am h1 element"),React.createElement("h2",{},"am h2 element")]
)])

    let root =ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)