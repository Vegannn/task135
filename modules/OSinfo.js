var os = require('os');
var colors = require('colors');


function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log(colors.green('System:'), type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.grey, cpu);
    console.log('Uptime: ~'.blue, (uptime / 60).toFixed(0), 'min');
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.rainbow, userInfo.homedir);
}

exports.print = getOSinfo;