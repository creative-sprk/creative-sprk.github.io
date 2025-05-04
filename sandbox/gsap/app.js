gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: ".square2",
//     start: "top 89%",
//     end: "top 20%",
//     scrub: 1,
//     pin: ".square",
//     markers: true
// })

gsap.to(".square", {
    x: window.innerWidth-150,
    //opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 80%",
        //end: () =>`+=${document.querySelector(".square").offsetHeight}`,
        end: "top 20%",
        scrub: 1,
        pin: ".square",
        pinSpacing: false,
        //toggleClass: "box-red",
        toggleActions: "restart none none none",
        markers: {
            startColor: "green",
            endColor: "red",
            fontSize: "1.75rem",
            fontWeight: "bold",
            indent: 200
        }
    }
})