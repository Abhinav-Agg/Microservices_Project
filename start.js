const { spawn } = require("child_process");
const path = require("path");
require("dotenv").config();

function runService(name, servicePath, entryFile) {
  const fullPath = path.join(__dirname, servicePath);
  const child = spawn(
    "nodemon",
    [entryFile],
    {
      cwd: fullPath,
      shell: true
    }
  );

  child.stdout.on("data", data => {
    process.stdout.write(`[${name}] ${data}`);
  });

  child.stderr.on("data", data => {
    process.stderr.write(`[${name} ERROR] ${data}`);
  });

  child.on("close", code => {
    console.log(`[${name}] exited with code ${code}`);
  });
}

// Run auth-service and api-gateway
runService("user-service", "./user-service", "index.js");
runService("auth-service", "./auth-service", "index.js");
runService("api-gateway", "./api-gateway", "index.js");