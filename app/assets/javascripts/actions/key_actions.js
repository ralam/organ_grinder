var KeyActions = {
  keyPressed: function (note) {
    AppDispatcher.dispatch({
      actionType: "KEY_PRESSED",
      note: note
    });
  },

  keyReleased: function (note) {
    AppDispatcher.dispatch({
      actionType: "KEY_RELEASED",
      note: note
    });
  }
};
