const body = document.body;
const imageContainer = document.querySelector('.image-container');
const videoWrapper = document.getElementById('videoWrapper');
let player;

function initializePlayer() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api"; 
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '-R38JqMHK8A',
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'disablekb': 0,
            'iv_load_policy': 3
        }
    });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

setTimeout(() => {
    body.style.backgroundColor = 'black';
    imageContainer.style.opacity = '1';
}, 100);

setTimeout(() => {
    imageContainer.style.opacity = '0';
    setTimeout(() => {
        imageContainer.style.display = 'none';
        videoWrapper.style.display = 'flex';
    }, 1000);
}, 3000);

setTimeout(() => {
    body.style.backgroundColor = 'red';
    videoWrapper.style.opacity = '1';
    initializePlayer();
}, 5000);
