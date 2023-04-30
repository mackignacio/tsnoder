#!/usr/bin/env node

const cli = require("../lib/cli");
const tsnoder = require("../lib/tsnoder");
const options = cli.parse(process.argv);

tsnoder(options);
