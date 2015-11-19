(function(root){
  var _keys = [];
  var CHANGE_EVENT = 'change';

  root.KeyStore = $.extend({}, EventEmiiter.prototype, {
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    all: function() {
      return _keys.slice(0);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
      }
    }),

    _addKey: function(key) {
      var idx = _keys.indexOf(key);
      if (idx === -1) {
        _keys.push(key);
        this.emit(CHANGE_EVENT);
      }
    },

    _removeKey: function(key) {
      var idx = _keys.indexOf(key);
      if(idx !== -1) {
        _keys.splice(idx, 1);
        this.emit(CHANGE_EVENT);
      }
    },

    groupUpdate: function(keys){
      _keys = keys.slice();
      this.emit(CHANGE_EVENT);
    }
  });

})();
