/*
- not flag
- 
*/

// ✅ allowed
@register
export default class Foo2 {
  // ...
}

// ✅ also allowed
export default
@register
class Bar {
  // ...
}

// ❌ error - before *and* after is not allowed
@before
@after
export class Bar2 {
  // ...
}

function register(target: any, c: any) {}
