module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
