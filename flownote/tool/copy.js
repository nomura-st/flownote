const fs = require("fs");

fs.cpSync(process.argv[2], process.argv[3], {
  force: true,
  recursive: true,
  errorOnExist: true,
});
