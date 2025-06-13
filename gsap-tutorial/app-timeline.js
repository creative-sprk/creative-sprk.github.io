gsap.registerPlugin(ScrollTrigger);

// let x = document.querySelector(".box");

// gsap.to(".box", {x:500, duration: 2})
// gsap.to(".box", {y: 200, duration: 3, delay: 2})
// gsap.to(".box", {x:0, duration: 2, delay: 5})

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 2
    }
});

tl1.to(".box", {x: 500, duration: 2})
   .to(".box", {y: 200, duration: 2}, 0)
   .to(".box", {x: 0, duration: 4});