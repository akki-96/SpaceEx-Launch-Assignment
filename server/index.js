require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-evn", "@babel/preset-react"]
});

require("./server");
