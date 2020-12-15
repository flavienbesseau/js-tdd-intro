function capitalizeFirstLetters(input) {
  let split = input.split(" ");
  let mapping = split.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  let join = mapping.join(" ");
  return join;
}

module.exports = capitalizeFirstLetters;
