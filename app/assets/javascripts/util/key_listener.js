(function(root){
  var NOTE_MAP = {
    65: 'C4',  // 'a'
    87: 'C4S', // 'w'
    83: 'D4',  // 's'
    69: 'D4S', // 'e'
    68: 'E4',  // 'd'
    74: 'F4',  // 'j'
    73: 'F4S', // 'i'
    75: 'G4',  // 'k'
    79: 'G4S', // 'o'
    76: 'A4',  // 'l'
    80: 'A4S', // 'p'
    186: 'B4', // ';'
  };
  var _heldKeys = [];
  var _validKeys = Object.keys(NOTE_MAP);

  $(document).on('keydown', function (event) {
    var keycode = e.keyCode;
    var valid = _validKeys.indexOf(keycode) !== 1;
    if (_heldKeys.indexOf(keycode) === -1 && valid) {
      heldKeys.push(keycode);
      KeyActions.keyPressed(NOTE_MAP[keycode]);
    }
  });

  $(document).on('keyup', function (event) {
    var keycode = e.keyCode;
    var idx = _heldKeys.indexOf(keycode)
    if (idx !== -1) {
      _heldKeys.splice(idx, 1);
      KeyActions.keyReleased(NOTE_MAP[keycode]);
    }
  });
})();
