const expect = require('chai').expect;
// import  index
var clock = require('../index');

describe('Reverse clock function', () => {
    it('it should decrement time by 1 second', () => {
        const newTime=clock.reverse_clock(1);
        const currTime=new Date();
        currTime.setSeconds(currTime.getSeconds()-1)
        expect(newTime).to.equal(currTime.toLocaleString());
    });
    it('it should decrement time by 10 seconds', () => {
        const newTime=clock.reverse_clock(10);
        const currTime=new Date();
        currTime.setSeconds(currTime.getSeconds()-10)
        expect(newTime).to.equal(currTime.toLocaleString());
    });
    it('it should be previous hour if decrement seconds by 3600 seconds', () => {
        const newTime=clock.reverse_clock(3600);
        const currTime=new Date();
        currTime.setHours(currTime.getHours()-1)
        expect(newTime).to.equal(currTime.toLocaleString());
    });
    it('it should be previous date if decrement seconds by 86400 seconds', () => {
        const newTime=clock.reverse_clock(86400);
        const currTime=new Date();
        currTime.setDate(currTime.getDate()-1)
        expect(newTime).to.equal(currTime.toLocaleString());
    });
    it('it should return null if input is 0', () => {
        const newTime=clock.reverse_clock(0);
        expect(newTime).to.equal(null);
    });
    it('it should return null if input is ABS', () => {
        const newTime=clock.reverse_clock('ABS');
        expect(newTime).to.equal(null);
    });
    it('it should return null if input is $$%%%', () => {
        const newTime=clock.reverse_clock('$$%%%');
        expect(newTime).to.equal(null);
    });
    it('it should return null if input is -1', () => {
        const newTime=clock.reverse_clock('-1');
        expect(newTime).to.equal(null);
    });
   });