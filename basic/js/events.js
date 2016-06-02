var ChildComponent = React.createClass({
    render: function() {
        return (
         <div>
            <div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
            {/* Props can be any valid JavaScript expression, including functions. When this button is clicked, it calls the given function, which happens to be performMagic in the parent component. */}
            <button onClick={this.props.onMagicClick}>Do Magic</button>
        </div>
        );
    }
});

var ParentComponent = React.createClass({
  performMagic: function() {
    alert('TAADAH!');
  },

  render: function() {
    return (
      <div>
        {/* Notice how we're passing a function as a prop to ChildComponent */}
        <ChildComponent onMagicClick={this.performMagic} />
      </div>
    );
  }
});

ReactDOM.render(
    <ParentComponent />,
    document.getElementById('container')
)