import assert from 'assert';
import Emitter from '../src/index.js';

const bus = new Emitter();

let params;
let called = false;
let called2 = false;

function listener() {
  called = true;
  params = arguments;
}

function listener2() {
  called2 = true;
}

describe('Emitter', () => {

  beforeEach(() => {
    called = false;
    called2 = false;
  });

  describe('Instance', () => {
    it('should return an instance of Emitter', function () {
      assert(typeof Emitter === 'function');
      assert(typeof bus === 'object');
      assert(bus instanceof Emitter);
    });
  });

  describe('Public methods', () => {
    it('should be defined "addListener" and "on" methods', () => {
      assert(bus.on);
    });

    it('should be defined "once" method', () => {
      assert(bus.once);
    });

    it('should be defined "emit" method', () => {
      assert(bus.emit);
    });
  });

  describe('.on(event, listener)', () => {

    it('should call all listeners when it emits an event', () => {
      bus.on('something', listener);
      bus.on('something', listener2);
      bus.emit('something');
      assert(called);
      assert(called2);
    });

  });

  describe('.once(event, listener)', () => {
    it('should call listener only one time', () => {
      bus.once('something2', listener);
      bus.once('something2', listener2);
      assert(bus._eventCollection['something2'].length === 2);
      bus.emit('something2');
      assert(bus._eventCollection['something2'] === undefined);
    });
  });


  describe('.off(event, listener)', () => {

    it('should remove a listener', () => {
      bus.on('something3', listener);
      bus.off('something3', listener);
      bus.emit('something3');
      assert(!called);
    });

  });

  describe('.emit(event, param1, param2, ..., paramsN)', () => {
    beforeEach(function () {
      bus.on('something', listener);
      bus.on('something', listener2);
    });

    it('should emit call all listeners', () => {
      bus.emit('something');
      assert(called);
      assert(called2);
    });

    it('should emit call all listeners with parameters', () => {
      bus.emit('something', 'param1');
      assert(called);
      assert(params[0] === 'param1');
    });
  });
});
