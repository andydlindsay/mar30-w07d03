# W7D3 - Side Effects & Other Data Fetching

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Dependencies
- [x] Cleanup
- [x] _useEffect_ Flow

### Rules for Hooks
- Must be used inside of a component or another hook...
- Only Call Hooks at the Top Level

### Pure functions
- a function without side effects
- called with the same arguments the function returns the same result

```js
let y = 5;
const sum = (x) => {
  y++;
  return x + y;
};
```

### Side Effects
- updating state/data internal or external to the application
- writing to standard out (aka console.log)
- modify the DOM directly
- establish socket connections (messaging app)
- data fetching
- setting timers or intervals


