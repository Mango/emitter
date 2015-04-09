# emitter

> A JavaScript Emitter written in ES6.

## Usage
```js
import Emitter from 'emitter';

const bus = new Emitter();

bus.emit('finish');
```

## API

### Emitter#on(event, listener)
Adds a `listener` to the collection for a specified `event`.
- `event` - The name of the event you want to add.
- `listener` - Listener you want to add from given event.

```js
emitter.on('live', listener);
```

### Emitter#once(event, listener)
Adds a one time `listener` to the collection for a specified `event`. It will execute only once.
- `event` - The name of the event.
- `listener` - Listener you want to add from the given event.

```js
emitter.once('live', listener);
```

### Emitter#off(event, listener)
Removes a `listener` from the collection for a specified `event`.
- `event` - The name of the event.
- `listener` - Listener you want to remove from the given event.

```js
emitter.off('live', listener);
```

### Emitter#emit(event, [...args])
Execute each of the `listeners` collection in order with the given parameters.
- `event` - The name of the event you want to emit.
- `[...args]` - The given arguments.

```js
emitter.emit('live', 'data1', 'data2');
```

## npm-scripts
```
$ npm run compile
```

```
$ npm run browser
```

```
$ npm test
```

```
$ npm run hint
```

## License
MIT license. Copyright © 2015 [Mango](http://getmango.com).
