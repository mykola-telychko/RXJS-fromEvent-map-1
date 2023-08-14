import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/creation/fromevent
// Example 1: Observable from mouse clicks

//create observable that emits click events
const source = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source.pipe(map((event) => `Click time: ${event.timeStamp}`));

const subscribe = example.subscribe((val) => console.log(val));
