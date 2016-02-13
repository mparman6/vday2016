$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '/aud/John_Legend_-_All_of_Me.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("onclick", function() {
            audioElement.play();
        }, true);

        $('#play').click(function() {
            audioElement.play();
        });

        $('#pause').click(function() {
            audioElement.pause();
        });
    });