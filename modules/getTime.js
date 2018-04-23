function getTime(sekundy) {
    if( sekundy !== null && !isNaN(sekundy) ) {
        var minuty = (sekundy / 60).toFixed(0);
        console.log(minuty ,'min', (sekundy % 60), 'sek');
    } else {
        process.stderr.write('Wrong instruction!\n');
    }
}

exports.print2 = getTime;