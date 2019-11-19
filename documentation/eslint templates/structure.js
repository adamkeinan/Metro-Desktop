eslint.workingDirectories - an array for working directories to be used. ESLint resolves configuration files (e.g. eslintrc) relative to a working directory. This new settings allows users to control which working directory is used for which files (see also CLIEngine options#cwd). Example:

root/
  client/
    .eslintrc.json
    client.js
  server/
    .eslintignore
    .eslintrc.json
    server.js
Then using the setting:

  "eslint.workingDirectories": [
    "./client", "./server"
  ]
