const { expect } = require('@jest/globals');
const { matchersWithOptions } = require('jest-json-schema');

expect.extend(matchersWithOptions({
    formats: {
        "permission": "[a-zA-Z0-9]+",
        "glob-pattern": ".+",
        "match-pattern": ".+",
        "mime-type": ".+",
        "content-security-policy": ".+"
    }
})); 