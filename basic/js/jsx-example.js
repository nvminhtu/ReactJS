var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';

ReactDOM.render(
  <div>
    <a href="#" className="button">Button</a>
    <div>{ipsumText}</div>
  </div>,
  document.getElementById('impl')
);

// Remember that we use className in React instead of class.
// Because there are braces around `ipsumText`, it is evaluated as a JavaScript expression. Try removing the braces, what happens?