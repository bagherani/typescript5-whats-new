/*
- not flag
- 
*/

// ✅ allowed
@register
export default class Foo {
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
