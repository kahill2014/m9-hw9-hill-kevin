// Initialize the scrollmagic plugin
$(document).ready(function() {
    // init controller
    var controller = new ScrollMagic.Controller();

    // create a scene
    var scene = new ScrollMagic.Scene({
        triggerElement: '#section-2',
        duration: 500, // the scene should last for a scroll distance of 100px
        offset: 300 // start this scene after scrolling for 50px
    })
        .setPin('#section-2') // pins the element for the the scene's duration
        .addTo(controller); // assign the scene to the controller
});

