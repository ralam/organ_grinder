var Organ = React.createClass({
  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function() {
    return { notes: KeyStore.all() };
  },

  render: function() {
    return (
      <div>
        <div className="keys group">
          {
            Object.keys(TONES).map(function (noteName) {
              return (<Key noteName={noteName} key={noteName}/>);
            })
          }
        </div>
      </div>
    )
  },

  _onChange: function() {
    this.setState({ keys: KeyStore.all() });
  }
})
