var firstScroll = true;

function playVideo() {
    if (player && YT && player.getPlayerState() !== YT.PlayerState.PLAYING) {
        setTimeout(function() {
            if (firstScroll) {
                player.playVideo();
                firstScroll = false;
            }
        }, 200);

        if (player.isMuted()) {
            player.unMute();
        }

    }
}
$("#faq .faq-row").click(function(e) {
    e.preventDefault();
    let n = e.delegateTarget.dataset.n;
    let active = parseInt(e.delegateTarget.dataset.visible);
    //alert(n);

    let selector = `#faq > section.section_content > div > div:nth-child(${n}) > div:last-child > div:last-child > span:last-child`;
    let question = selector.replace('span:last-child', 'span:first-child');
    if (active === 1) {
        $(selector).fadeOut();
        e.delegateTarget.dataset.visible = 0;
        $(question).css('font-weight', 'normal');
    } else {
        $(question).css('font-weight', '600');
        $(selector).fadeIn();
        e.delegateTarget.dataset.visible = 1;
    }
});
$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    arrows: false,
    adaptativeHeight: true
});
$('#prospectos').submit(function(e) {
    e.preventDefault();
    let datos = $(e.target).serializeObject();
    let url = 'https://script.google.com/macros/s/AKfycby2WYEFo_kfM55AEHIl7kZlf4W1GpNCQAuPawAFgZYNOH5Dziw0oZHAbfC6YelFBKW-/exec';
    $.ajax({
        crossDomin: true,
        redirect: "follow",
        url: url,
        method: "POST",
        dataType: "json",
        data: datos,
        success: function(data) {
            $('.gracias').fadeIn(1000).fadeOut(300);
            console.log(data);
        },
        error: function(error) {
            //  alert(error);
        }
    });
});
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'pAsFai1LUAM',
        heigh: '100%',
        width: '100%',
        playerVars: {
            'playsinline': 1,
            'enablejsapi': 1,
            'autoplay': 0,
            'theme': 'light',
            'color': 'white'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },

    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    console.log('youtube player loaded');
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {
    console.log('youtube player state change: ' + event.data);
    if (player && YT && player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING) {
        $('.band').css('opacity', '.5');
    } else if (player && YT && player.getPlayerState() === YT.PlayerState.PAUSED) {
        $('.band').css('opacity', 'unset');
    }
}

function stopVideo() {
    player.stopVideo();
}