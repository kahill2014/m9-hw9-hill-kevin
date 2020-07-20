// Initialize the scrollmagic plugin
$(document).ready(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // Initialize scene 1
    var scene1 = new ScrollMagic.Scene({
        triggerElement: '#section-1'
    }).setTween(new TweenMax.to('#section-1', 3, {
        transform: 'translateY(50vh)'
    }));

    // Initialize scene 2
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#section-2'
    }).setTween(new TweenMax.to('#section-2', 1.5, {
        backgroundColor: 'red',
        color: 'white'
    }));

    // Initialize scene 3
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '#section-3'
    }).setTween(new TweenMax.to('#section-3', 1.5, {
        fontSize: '62px'
    }));

    // Initialize scene 4
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '#section-4'
    }).setTween(new TweenMax.to('#section-4', 2.5, {
        backgroundColor: 'black',
        color: 'yellow',
        transform: 'rotate(45deg)'
    }));

    controller.addScene([scene1,scene2,scene3,scene4]);
});
