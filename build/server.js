"use strict";

var _app = require("app.js");

const {
  app
} = new _app.App();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));