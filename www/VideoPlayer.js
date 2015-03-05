
var exec = require("cordova/exec");

var NewActivty = {
    play: function(url,width,height) {
        exec(null, null, "VideoPlayer", "play", [url,width,height]);
    }
};

module.exports = VideoPlayer;
