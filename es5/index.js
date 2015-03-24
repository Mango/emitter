(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var key in props) {
      var prop = props[key];prop.configurable = true;if (prop.value) prop.writable = true;
    }Object.defineProperties(target, props);
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

var _classCallCheck = function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Creates a new instance of Emitter.
 * @class
 * @returns {Object} Returns a new instance of Emitter.
 * @example
 * // Creates a new instance of Emitter.
 * var Emitter = require('emitter');
 *
 * var emitter = new Emitter();
 */

var Emitter = (function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, {
    on: {

      /**
       * Adds a listener to the collection for the specified event.
       * @memberof! Emitter.prototype
       * @function
       * @param {String} event - The event name.
       * @param {Function} listener - A listener function to add.
       * @returns {Object} Returns an instance of Emitter.
       * @example
       * // Add an event listener to "foo" event.
       * emitter.on('foo', listener);
       */

      value: function on(event, listener) {
        // Use the current collection or create it.
        this._eventCollection = this._eventCollection || {};

        // Use the current collection of an event or create it.
        this._eventCollection[event] = this._eventCollection[event] || [];

        // Appends the listener into the collection of the given event
        this._eventCollection[event].push(listener);

        return this;
      }
    },
    once: {

      /**
       * Adds a listener to the collection for the specified event that will be called only once.
       * @memberof! Emitter.prototype
       * @function
       * @param {String} event - The event name.
       * @param {Function} listener - A listener function to add.
       * @returns {Object} Returns an instance of Emitter.
       * @example
       * // Will add an event handler to "foo" event once.
       * emitter.once('foo', listener);
       */

      value: function once(event, listener) {
        var self = this;

        function fn() {
          self.off(event, fn);
          listener.apply(this, arguments);
        }

        fn.listener = listener;

        this.on(event, fn);

        return this;
      }
    },
    off: {

      /**
       * Removes a listener from the collection for the specified event.
       * @memberof! Emitter.prototype
       * @function
       * @param {String} event - The event name.
       * @param {Function} listener - A listener function to remove.
       * @returns {Object} Returns an instance of Emitter.
       * @example
       * // Remove a given listener.
       * emitter.off('foo', listener);
       */

      value: function off(event, listener) {

        var listeners = undefined;

        // Defines listeners value.
        if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
          return this;
        }

        listeners.forEach(function (fn, i) {
          if (fn === listener || fn.listener === listener) {
            // Removes the given listener.
            listeners.splice(i, 1);
          }
        });

        // Removes an empty event collection.
        if (listeners.length === 0) {
          delete this._eventCollection[event];
        }

        return this;
      }
    },
    emit: {

      /**
       * Execute each item in the listener collection in order with the specified data.
       * @memberof! Emitter.prototype
       * @function
       * @param {String} event - The name of the event you want to emit.
       * @param {...Object} data - Data to pass to the listeners.
       * @returns {Object} Returns an instance of Emitter.
       * @example
       * // Emits the "foo" event with 'param1' and 'param2' as arguments.
       * emitter.emit('foo', 'param1', 'param2');
       */

      value: function emit(event) {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var listeners = undefined;

        // Defines listeners value.
        if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
          return this;
        }

        // Clone listeners
        listeners = listeners.slice(0);

        listeners.forEach(function (fn) {
          return fn.apply(_this, args);
        });

        return this;
      }
    }
  });

  return Emitter;
})();

/**
 * Exports Emitter
 */
module.exports = Emitter;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcGF6Z3VpbGxlL2RldmVsb3Blci9NYW5nby9lbWl0dGVyLWVzNi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7QUFFYixJQUFJLFlBQVksR0FBRyxDQUFDLFlBQVk7QUFBRSxXQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFBRSxTQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUFFLFVBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxBQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEFBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQUUsQUFBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQUUsQUFBQyxPQUFPLFVBQVUsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFBRSxRQUFJLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEFBQUMsSUFBSSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLEFBQUMsT0FBTyxXQUFXLENBQUM7R0FBRSxDQUFDO0NBQUUsQ0FBQSxFQUFHLENBQUM7O0FBRWhjLElBQUksZUFBZSxHQUFHLHlCQUFVLFFBQVEsRUFBRSxXQUFXLEVBQUU7QUFBRSxNQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQSxBQUFDLEVBQUU7QUFBRSxVQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7R0FBRTtDQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhakssSUFQTSxPQUFPLEdBQUEs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QWdCLENBQUMsS0FBSyxDQUFDLENBQUEsRUFBRztBQUN6RSxpQkFBTyxJQUFJLENBQUM7U0FDYjs7O0FBR0QsaUJBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUvQixpQkFBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsRUFBQTtBQThCZCxpQkE5QmtCLEVBQUUsQ0FBQyxLQUFLLENBQUEsS0FBQSxFQUFPLElBQUksQ0FBQyxDQUFBO1NBQUEsQ0FBQyxDQUFDOztBQUU5QyxlQUFPLElBQUksQ0FBQztPQUNiO0tBZ0NFO0dBQ0YsQ0FBQyxDQUFDOztBQUVILFNBbkpJLE9BQU8sQ0FBQTtDQW9KWixDQUFBLEVBQUcsQ0FBQzs7Ozs7QUFLTCxNQUFNLENBQUMsT0FBTyxHQWxDQyxPQUFPLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAY2xhc3NcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiB2YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbiAqXG4gKiB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gKi9cbmNsYXNzIEVtaXR0ZXIge1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBcImZvb1wiIGV2ZW50LlxuICAgKiBlbWl0dGVyLm9uKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8IHt9O1xuXG4gICAgLy8gVXNlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24gb2YgYW4gZXZlbnQgb3IgY3JlYXRlIGl0LlxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gPSB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdIHx8IFtdO1xuXG4gICAgLy8gQXBwZW5kcyB0aGUgbGlzdGVuZXIgaW50byB0aGUgY29sbGVjdGlvbiBvZiB0aGUgZ2l2ZW4gZXZlbnRcbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICBzZWxmLm9mZihldmVudCwgZm4pO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmbi5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGZyb20gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFJlbW92ZSBhIGdpdmVuIGxpc3RlbmVyLlxuICAgKiBlbWl0dGVyLm9mZignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cbiAgb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuXG4gICAgbGV0IGxpc3RlbmVycztcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8ICEobGlzdGVuZXJzID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChmbiwgaSkgPT4ge1xuICAgICAgaWYgKGZuID09PSBsaXN0ZW5lciB8fCBmbi5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gUmVtb3ZlcyB0aGUgZ2l2ZW4gbGlzdGVuZXIuXG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmVzIGFuIGVtcHR5IGV2ZW50IGNvbGxlY3Rpb24uXG4gICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGUgZWFjaCBpdGVtIGluIHRoZSBsaXN0ZW5lciBjb2xsZWN0aW9uIGluIG9yZGVyIHdpdGggdGhlIHNwZWNpZmllZCBkYXRhLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgeW91IHdhbnQgdG8gZW1pdC5cbiAgICogQHBhcmFtIHsuLi5PYmplY3R9IGRhdGEgLSBEYXRhIHRvIHBhc3MgdG8gdGhlIGxpc3RlbmVycy5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBFbWl0cyB0aGUgXCJmb29cIiBldmVudCB3aXRoICdwYXJhbTEnIGFuZCAncGFyYW0yJyBhcyBhcmd1bWVudHMuXG4gICAqIGVtaXR0ZXIuZW1pdCgnZm9vJywgJ3BhcmFtMScsICdwYXJhbTInKTtcbiAgICovXG4gIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICBsZXQgbGlzdGVuZXJzO1xuXG4gICAgLy8gRGVmaW5lcyBsaXN0ZW5lcnMgdmFsdWUuXG4gICAgaWYgKCF0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwgIShsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ2xvbmUgbGlzdGVuZXJzXG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goZm4gPT4gZm4uYXBwbHkodGhpcywgYXJncykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuXG4vKipcbiAqIEV4cG9ydHMgRW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBFbWl0dGVyO1xuIl19
