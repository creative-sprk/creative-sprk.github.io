gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    x: window.innerWidth-150,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top center",
        markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "4rems",
            fontWeight: "bold",
            indent: 200
        }
    }
})