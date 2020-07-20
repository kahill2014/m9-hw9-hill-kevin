// Initialize the scrollmagic plugin
$(document).ready(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    var tween2 = new TweenMax.to('#section-2', 1.5, {
        backgroundColor: 'red',
        color: 'white'
    });
    var tween3 = new TweenMax.to('#section-3', 1.5, {
        fontSize: '62px'
    });
    var tween4 = new TweenMax.to('#section-4', 1.5, {
        backgroundColor: 'red',
        color: 'white'
    });

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#section-2'
    })
    .setTween(tween2)
    .addTo(controller);
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#section-3'
    })
    .setTween(tween3)
    .addTo(controller);
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#section-4'
    })
    .setTween(tween4)
    .addTo(controller);
});

