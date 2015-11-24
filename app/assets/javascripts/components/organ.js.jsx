var Organ = React.createClass({
  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function() {
    return { notes: KeyStore.all() };
  },

  _notes: function(note) {
    var note_key = {
      "C4": "A",
      "C4S": "W",
      "D4": "S",
      "D4S": "E",
      "E4": "D",

      "F4": "J",
      "F4S": "I",
      "G4": "K",
      "G4S": "O",
      "A4": "L",
      "A4S": "P",
      "B4": ";"
    };
    return note_key[note];
  },

  render: function() {
    return (
      <div>
        <div className="keys group">
          {
            Object.keys(TONES).map(function (noteName) {
              var keyName = this._notes(noteName);
              return (<Key noteName={noteName} keyName={keyName} key={noteName}/>);
            }.bind(this))
          }
        </div>
      </div>
    )
  },

  _onChange: function() {
    this.setState({ keys: KeyStore.all() });
  }
})
