gsap.registerPlugin(ScrollTrigger);

gsap.from(".square", {
    scale: .2,
    duration: 1,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        end: "top 30%",
        // id: "square",
        // toggleClass: "red",
        toggleActions: "restart reverse none none",
        // possible toggleActions values;
        // play pause restart reverse resume complete none

        // scrub: 1
        // scrub can be set to "true" 
        // or a numeric value (seconds) for smoothing

        // pin: ".square",
        // pinSpacing: false,

        markers: true        
    }
}) 