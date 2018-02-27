#!/usr/bin/env node
'use strict';

console.log('Starting Ipfs Node');

const IPFS = require('ipfs');
const node = new IPFS();

node.on('ready', () => {
	console.log('ready');
});

node.on('error', console.log)
