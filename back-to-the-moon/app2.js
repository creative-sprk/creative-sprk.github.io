gsap.registerPlugin(ScrollTrigger);


const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#prologue",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      // markers: true, // turn on while debugging
    }
  });
  
  // parallax stars
  tl.to(".layer1", { yPercent: -20 }, 0)
    .to(".layer2", { yPercent: -40 }, 0)
    .to(".layer3", { yPercent: -60 }, 0)
  
  // moon fades/enters around 50% scroll
    .fromTo(".moon",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.5
    )
  
  // earth rises faster near end
    .fromTo(".earth",
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      0.8
    );
