const sum = require('./app');
const minus = require('./app');


test(' 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});