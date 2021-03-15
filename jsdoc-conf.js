/* eslint-env node */

module.exports = {
    'opts': {
        'destination': 'docs',
        'recurse': true,
        'template': 'node_modules/ink-docstrap/template',
        'fileSet': '.nojekyll'
    },

    'source': {
        'include': ['src', 'README.md']
    },

    'plugins': [
        'plugins/markdown',
        'jsdoc-file'
    ],

    'markdown': {
        'parser': 'marked'
    },
    
    'templates': {
        'outputSourceFiles': true,
        'systemName': 'weekstart',
        'copyright': 'Copyright (c) 2017-present Denis Sikuler',
        'includeDate': false,
        'theme': 'spacelab',
        'linenums': true
    }
};
