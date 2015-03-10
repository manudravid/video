# video
Video Player with button on top

INSTALLATION
------------
cordova plugin add https://github.com/manudravid/video.git

USING
-------
Play video:
VideoPlayer.play(path, [options], [completeCallback], [errorCallback]);
eg:- VideoPlayer.play("file:///android_asset/www/sample.mp4");

To stop before play end:
VideoPlayer.close();


