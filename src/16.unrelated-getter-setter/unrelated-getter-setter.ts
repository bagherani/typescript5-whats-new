interface Serializer {
  // remove string
  set value(v: string | number | boolean);
  get value(): string;
}
declare let box: Serializer;
