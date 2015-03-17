'use strict';

var assert = require('assert');
var Emitter = require('../dist/build.js');
var bus = new Emitter();
var params;
var called = false;
var called2 = false;

function listener() {
  called = true;
  params = arguments;
}

function listener2() {
  called2 = true;
}

describe('Emitter', function () {

  beforeEach(function (){
    called = false;
    called2 = false;
  });

  describe('Instance', function() {
    it('should return an instance of Emitter', function () {
      assert(typeof Emitter === 'function');
      assert(typeof bus === 'object');
      assert(bus instanceof Emitter);
    });
  });

  describe('Public methods', function() {
    it('should be defined "addListener" and "on" methods', function () {
      assert(bus.on);
    });

    it('should be defined "once" method', function () {
      assert(bus.once);
    });

    it('should be defined "emit" method', function () {
      assert(bus.emit);
    });
  });

  describe('.on(event, listener)', function () {

    it('should call all listeners when it emits an event', function () {
      bus.on('something', listener);
      bus.on('something', listener2);

      bus.emit('something');

      assert(called);
      assert(called2);
    });

  });

  describe('.once(event, listener)', function () {
    it('should call listener only one time', function () {
      bus.once('something2', listener);
      bus.once('something2', listener2);

      assert(bus._eventCollection['something2'].length === 2);

      bus.emit('something2');

      assert(bus._eventCollection['something2'] === undefined);
    });
  });


  describe('.off(event, listener)', function () {

    it('should remove a listener', function () {
      bus.on('something3', listener);
      bus.off('something3', listener);
      bus.emit('something3');

      assert(!called);
    });

  });

  describe('.emit(event, param1, param2, ..., paramsN)', function () {
    beforeEach(function () {
      bus.on('something', listener);
      bus.on('something', listener2);
    });

    it('should emit call all listeners', function () {
      bus.emit('something');

      assert(called);
      assert(called2);
    });

    it('should emit call all listeners with parameters', function () {
      bus.emit('something', 'param1');
      assert(called);
      assert(params[0] === 'param1');
    });
  });
});
