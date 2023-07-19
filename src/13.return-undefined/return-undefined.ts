declare function takesFunction(f: () => void): undefined;

// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  //
  return undefined;
});

// ❌ error!
// A function whose declared type is neither 'void' nor 'any' must return a value.
takesFunction((): undefined => {
  // no returns
});

// ❌ error!
// Argument of type '() => void' is not assignable to parameter of type '() => undefined'.
takesFunction(() => {
  return;
});

// ✅ works
takesFunction(() => {
  return undefined;
});

// ✅ works
takesFunction((): undefined => {
  return;
});
