
module.exports = function (context) {

    const fs = context.requireCordovaModule('fs');
    const path = context.requireCordovaModule('path');

    rmDir = function(dirPath, removeSelf) {
        if (removeSelf === undefined)
            removeSelf = true;
        try { var files = fs.readdirSync(dirPath); }
        catch(e) { return; }
        if (files.length > 0)
            for (var i = 0; i < files.length; i++) {
                var filePath = path.join(dirPath, files[i]);
                if (fs.statSync(filePath).isFile())
                    fs.unlinkSync(filePath);
                else
                    rmDir(filePath);
            }
        if (removeSelf)
            fs.rmdirSync(dirPath);
    };

    rmDir('./www', false);

    rmDir('./.tmp', true);
}

