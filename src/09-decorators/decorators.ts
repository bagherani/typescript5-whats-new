/*
- no more experimentalDecorators: true
*/

@register
export default class Foo100 {}

export
@register
class Bar100 {}

declare function register(target: any, context: any): any;
