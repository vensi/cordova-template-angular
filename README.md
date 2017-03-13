##This is the template to build Cordova project with Angular Framework.

###Prerequisites
- Install npm 3.10.3 or higher.
- Install cordova 6.4.0 or higher.(npm -g install cordova)
- Install [cordova icon](https://github.com/AlexDisler/cordova-icon). (sudo npm install cordova-icon -g)
	- Will require imagemagick
        - on Mac: brew install imagemagick
            - if issues with homebrew [see here](http://stackoverflow.com/questions/24652996/homebrew-not-working-on-osx)
        - on Windows: [download](http://www.imagemagick.org/script/binary-releases.php#windows)
- Install [cordova splash](https://github.com/AlexDisler/cordova-splash). (sudo npm install cordova-splash -g)
- Install ios-deploy or higher.(npm -g install ios-deploy)
- Install Cocoapods
```
sudo gem install cocoapods
export GEM_HOME=$HOME/.gem
export PATH=$GEM_HOME/bin:$PATH
```

###Other
- tested on macOS 10.12.1, need to verify on windows.
- make sure git ssh is setup for authentication. [Check this link](https://help.github.com/articles/error-permission-denied-publickey/)

###Steps
Create the project with this example, replacing the variables based on your project.
```
>> npm install -g @angular/cli
>> ng new hello/client --mobile
>> cordova create hello/cordova com.example.hello HelloWorld --template https://github.com/vensi/cordova-template-angularp.git
>> cd hello/client
>> cordova build --browserify
```
Run this command to build all platforms.
```
cordova build --browserify
```
To run individual platforms use the following commands
```
cordova run browser --browserify
cordova run android --browserify
cordova run ios --browserify
```
To build debug version, add --debug
```
cordova build browser --browserify --debug
```
Check [Cordova CLI reference](http://cordova.apache.org/docs/en/6.x/reference/cordova-cli/index.html) for more info on the commands and different options.

To build only the web components use these commands

This will launch the debug version in the browser.
```
ng serve
```
This will combine and minify the values. This called from hooks when building the cordova platform.
```
ng build --prod
```
###Make sure you select watch and get notified on changes to this repo for future updates.

###Issues
If you see this error, 
- 'Error: Command failed: gulp build':  Cross check if you did the prepare or build step first and then do run.
- 'Error: Current working directory is not a Cordova-based project.': Cordova is looking for www folder. Create www folder in root or do gulp build.
  
