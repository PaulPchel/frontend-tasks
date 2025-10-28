function wrap<T>(value: T) {
  return { value };
}

const wrappedNumber = wrap(67);
console.log(wrappedNumber);

const wrappedText = wrap("Hello!");
console.log(wrappedText);