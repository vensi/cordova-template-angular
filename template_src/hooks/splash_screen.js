
module.exports = function (context) {

    var Q = context.requireCordovaModule('q');
    var deferred = Q.defer();

    const exec = context.requireCordovaModule('child_process').execSync;
    child = exec('cordova-splash', (error, stdout, stderr) => {

        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}


