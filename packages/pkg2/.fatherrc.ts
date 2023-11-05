export default {
  target: "es2020",
  cjs: { type: "babel", lazy: true },
  esm: {
    type: "rollup",
  },
  // cjs: {
  //   type: "rollup",
  // },
  umd: {
    name: "foo",
  },
  disableTypeCheck: false,
};
