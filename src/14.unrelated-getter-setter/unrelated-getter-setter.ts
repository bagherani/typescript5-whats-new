interface Serializer {
  // remove string
  set value(v: number | boolean);
  get value(): string;
}

declare let box: Serializer;
