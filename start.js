const { spawn } = require("child_process");
const path = require("path");

function runService(name, servicePath, entryFile, envFile = ".env") {
  const fullPath = path.join(__dirname, servicePath);
  const child = spawn(
    "nodemon",
    [entryFile],
    {
      cwd: fullPath,
      env: {
        ...process.env, // inherit existing env vars
        DOTENV_CONFIG_PATH: path.join(fullPath, envFile),
      },
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
runService("api-gateway", "./api-gateway", "index.js");
runService("auth-service", "./auth-service", "index.js");