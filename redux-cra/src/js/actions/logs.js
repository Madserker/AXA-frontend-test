var fs = require('browserify-fs');

export function writeLog(log){
    fs.writeFile("/test", 
    log
    , function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
}