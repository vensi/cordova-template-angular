
module.exports = function (context) {

    //if www folder doesn't exist, create it
    var fs = context.requireCordovaModule('fs');
    var dir = './www';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    var cmd = context.cmdLine.indexOf('--debug') > 0 ? 'ng build' : 'ng build --prod';
    console.log('>>>ng build with options:'+cmd);

    const exec = context.requireCordovaModule('child_process').execSync;
    child = exec(cmd, (error, stdout, stderr) => {

        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}

