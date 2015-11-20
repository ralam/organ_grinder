var Key = React.createClass({
  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function() {
    return { pressed: this.thisKeyPressed() };
  },

  render: function() {
    var className = "note-key"
    if(this.state.pressed){
      className += " pressed";
    }
    if(this.props.noteName[2] === "S") {
      className += " sharp";
    }
    return <div className={className}>{this.props.noteName}</div>;
  },

  thisKeyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  _onChange: function () {
    var pressed = this.thisKeyPressed();
    pressed ? this.note.start() : this.note.stop();
    this.setState({ pressed: pressed });
  }
});
