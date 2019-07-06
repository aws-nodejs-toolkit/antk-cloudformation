'use strict';

const { cli } = require('@aws-toolkit/aws-cli');

async function deploy(templateFile, stackName, options = []) {
    options = [
        'deploy',
        '--templateFile', templateFile,
        '--stackName', stackName,
        ...options
    ];

    await cli('cloudformation', options);
}

module.exports.deploy = deploy;
