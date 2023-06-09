class SafeBox {
  #value: string | undefined;
  // Only accepts strings!
  set value(newValue: number) {}
  // Must check for 'undefined'!
  get value(): string {
    return this.#value;
  }
}
