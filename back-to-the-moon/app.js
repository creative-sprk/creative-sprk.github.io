gsap.registerPlugin(ScrollTrigger);

// ----------------------------
// SLOW-SCROLL STARFIELD FOR PROLOGUE
// ----------------------------
ScrollTrigger.create({
    trigger: '.starfield',
    start: 'top top',
    endTrigger: '#prologue-moon',
    end: 'bottom 50%',
    opacity: 0,
    scrub: true;
});

// ----------------------------
// CHANGE BACKGROUND FOR ACT 1
// ----------------------------
ScrollTrigger.create({
    trigger: "#section-act-1",
    start: "top bottom",
    end: "bottom bottom",
    toggleClass: {targets: "main", className: "white-bg"},
    markers: {
        startColor: "green",
        endColor: "red",
        fontSize: "1.75rem",
        fontWeight: "bold",
        indent: 200
    }
});


// ----------------------------
// CHANGE BACKGROUND FOR ACT 2
// ----------------------------
ScrollTrigger.create({
    markers: {
        startColor: "green",
        endColor: "red",
        fontSize: "1.75rem",
        fontWeight: "bold",
        indent: 200
    },
    trigger: "#section-act-2",
    start: "top bottom",
    toggleClass: {targets: "main", className: "black-bg"},
});



ScrollTrigger.create({
    markers: {
        startColor: "green",
        endColor: "red",
        fontSize: "1.75rem",
        fontWeight: "bold",
        indent: 200
    },
    trigger: "#prologue-moon",
    start: "center center",
    end: "bottom top",
    pin: "#prologue-moon"
});

// gsap.to("#prologue-moon", {
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#prologue-moon",
//         start: "center center",
//         end: `+=${document.querySelector("#prologue-moon").offsetHeight * 3}`,
//         pin: "#prologue-moon"
//     }
// })

// gsap.to("main", {
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#section-act-2",
//         start: "top bottom",
//         end: "bottom top",
//         toggleClass: {targets: "main", className: "black-bg"},
//         toggleActions: "restart reverse none none",
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: "1.75rem",
//             fontWeight: "bold",
//             indent: 200            
//         }
//     }
// })

// gsap.to("main", {
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".timeline-wrapper",
//         start: "top bottom",
//         end: "bottom top",
//         toggleClass: {targets: "main", className: "white-bg"},
//         toggleActions: "restart reverse none none",
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: "1.75rem",
//             fontWeight: "bold",
//             indent: 200            
//         }
//     }
// })
