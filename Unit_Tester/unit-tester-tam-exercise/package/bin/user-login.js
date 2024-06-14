#!/usr/bin/env node
const { userLogin } = require('../dist/index.js')

userLogin().then(
  () => process.stdout.write('Login successful\n'),
  err => {
    process.stderr.write(`Login failed: ${err}\n`)
    process.exit(1)
  }
)
