function wrap<T>(value: T) {
  return { value };
}

const wrapped = wrap<number>(42);
console.log(wrapped);

const wrappedText = wrap("Hello!");
console.log(wrappedText);