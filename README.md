# AWS Node.js Toolkit - CloudFormation
A tiny wrap around the ANTK AWS CLI for CloudFormation, which runs any command as a promise

Easily integrates with node task runners (e.g.: npm and gulp) due to its promise interface.
## Prerequisites
You must have the AWS CLI installed and have its executable added to your path
## Usage
You can execute all commands available from your AWS CLI version
```js
import cloudformation from '@aws-toolkit/cloudformation';
```
```js
const cloudformation = require('@aws-toolkit/cloudformation');

const args = [
    '--template-file', '<value>',
    '--stack-name', '<value>'
];

async function example() {
    await cloudformation.deploy(args);
}
```
