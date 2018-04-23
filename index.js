var OSinfo = require('./modules/OSinfo');
var getTime = require('./modules/getTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();    
    var cyfra = input ? input.replace('/getTime', '').trim() : '';
    
    if (input !== null) {
        var instruction = input.trim();

        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            case '/getTime'+cyfra:
            	getTime.print2(cyfra); 
            	break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});