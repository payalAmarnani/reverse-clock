const args = require('minimist')(process.argv.slice(2))
const value = args['DECREMENT_BY_SECS']
const newTime= reverse_clock(parseInt(value));
console.log(`${newTime}`);

function reverse_clock(value){
    if(value && Math.sign(value)>-1){
        const currentDate=new Date()
        currentDate.setSeconds(currentDate.getSeconds()-value)
        return currentDate.toLocaleString();
    }
    return null
}
module.exports={
    reverse_clock,
}
