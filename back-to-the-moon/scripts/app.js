gsap.registerPlugin(ScrollTrigger);


// ----------------------------
// SLOW-SCROLL STARFIELD FOR PROLOGUE
// ----------------------------
// ─── PROLOGUE TIMELINE ───────────────────────
const prologueTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-prologue",
    start:  "top top",
    end:    "bottom top",    // pin for 120% of the viewport height
    scrub:  3,
    pin:    true,
    pinSpacing: true,   // still let the next section scroll over it
    markers: false
  }
});

 
prologueTL.from("#prologue-starfield", { opacity: 0 }, 0)
  .to("#prologue-starfield", { y: -900 }, 0.1)
  .from("#prologue-moon", { y: "130%", scale: 1 }, 0.1)
  .from("#prologue-earth-edge", { y: "400%" }, 0.1)
  .from("#prologue-title", { opacity: 0, scale: 0.75 }, 0.4)
  .to([ "#prologue-title", "#prologue-earth-edge" ], { opacity: 0 }, 0.8)
  .to("#prologue-moon", { scale: 5, xPercent: -50, yPercent: -50}, 0.9)
  .to("#section-prologue", {opacity: 0}, 0.95);

   
// ----------------------------
// JFK SPEECH
// ----------------------------
ScrollTrigger.create({
  trigger: "#act1-scene1",  // the element you want to pin
  start:   "top top",       // when its top hits the top of the viewport
  end:     "bottom top",    // when its bottom hits the top of the viewport
  pin:     true,            // pin it in place
  pinSpacing: true,        // (optional) remove the extra blank space it normally leaves
  // scrub: true,           // (optional) tie any attached tweens to the scroll position
  markers: false             // (optional) shows visual start/end markers
});


// ----------------------------
// APOLLO LANDINGS
// ----------------------------
// Pin this section down
ScrollTrigger.create({
  trigger: "#act1-scene3",        // the element you want to pin
  start:   "top top",       // when its top hits the top of the viewport
  end:     "bottom top",    // when its bottom hits the top of the viewport
  pin:     "#footprint-landing-sites",            // pin it in place
  pinSpacing: true,        // (optional) remove the extra blank space it normally leaves
  // scrub: true,           // (optional) tie any attached tweens to the scroll position
  markers: false,             // (optional) shows visual start/end markers
  id: "footprint"
});

// animate transtion from footprint to full moon map
const apollo11LandingTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#act1-scene3",
        markers: false,
        start: "10% top",
        // end: "bottom top",
        toggleActions: "restart pause restart reverse",
        scrub: false
    }
});
apollo11LandingTL.to("#neil-armstrong-footprint", {scale: 0, x: "+=10%", opacity: 0, duration: 0.6, ease: "power.in"}, 0.1)
    .from("#act1-moon-wrapper", {scale: 60, x: -6000, y: -800, duration: 2.5, ease: "power3.out"}, 0.1)
    .to("#apollo11-site-marker", {opacity: 1, duration: 2},">")
    .to("#apollo11-info", {opacity: 1, duration: 2}, "<");

// Scrub-animation of moon landing site markers
const apolloLandingsTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#act1-scene3",
        markers: false,
        start: "30% top",
        end: "bottom 90%",
        toggleActions: "restart none reverse restart",
        scrub: 1
    }
});
apolloLandingsTL.to("#apollo12-site-marker", {opacity: 1, duration: 0.75})
  .to("#apollo12-info", {opacity: 1, duration: 0.75}, "<")
  .to("#apollo14-site-marker", {opacity: 1, duration: 0.75},">")
  .to("#apollo14-info", {opacity: 1, duration: 0.75}, "<")
  .to("#apollo15-site-marker", {opacity: 1, duration: 0.75},">")
  .to("#apollo15-info", {opacity: 1, duration: 0.75}, "<")
  .to("#apollo16-site-marker", {opacity: 1, duration: 0.75},">")
  .to("#apollo16-info", {opacity: 1, duration: 0.75}, "<")
  .to("#apollo17-site-marker", {opacity: 1, duration: 0.75},">")
  .to("#apollo17-info", {opacity: 1, duration: 0.75}, "<")


// ----------------------------
// APOLLO-ARTEMIS DATES
// ----------------------------

function playRocketMan() {
    // window.alert("rocket man")
}

function playStarboy() {
    // document.querySelector("#timeline-apollo-end .timeline-date-monthday").innerHTML = 'December 11,'
    // document.querySelector("#timeline-apollo-end .timeline-date-year").innerHTML = '2017'

    // window.alert("starboy")
}

// set up dates scene timeline
const datesTL = gsap.timeline({
    onStart: playRocketMan,
    });

datesTL.to("#apollo-17-narrative-1", {opacity: 1, duration: 1}, 1)
  .to("#apollo-17-narrative-1", {opacity: 0, duration: 1}, ">6")
  .to("#apollo-17-narrative-2", {opacity: 1, duration: 1}, ">1")
  .to("#apollo-17-narrative-2", {opacity: 0, duration: 1}, ">3")

// // Pin this section down
ScrollTrigger.create({
  trigger: "#act1-scene5",
  start:   "top top",
  end:     "center+=1 top",    // when its bottom hits the top of the viewport
  pin:     true,            // pin it in place
  pinSpacing: true,         // (optional) remove the extra blank space it normally leaves
  scrub: 1,              // (optional) tie any attached tweens to the scroll position
  markers: false,            // (optional) shows visual start/end markers
  id: "dates",
  toggleActions: "restart none none restart",
  animation: datesTL
});

// set up dates scene timeline
const dates2TL = gsap.timeline({
    onStart: playStarboy
    });

// crossfade dates
dates2TL.to("#act1-scene5", {backgroundColor: "black", duration: 1}, 0)
  .to("#timeline-apollo-end", {opacity: 0, duration: 1}, 0)
  .to("#timeline-artemis-start", {opacity: 1, duration: 1}, 0)
  .to("#artemis-narrative-1", {opacity: 1, duration: 1}, 1)


// // Pin this section down
ScrollTrigger.create({
  trigger: "#act1-scene5",
  start:   "1 top",
  end:     "bottom top",    // when its bottom hits the top of the viewport
  pin:     true,            // pin it in place
  pinSpacing: true,         // (optional) remove the extra blank space it normally leaves
  scrub: false,              // (optional) tie any attached tweens to the scroll position
  markers: false,            // (optional) shows visual start/end markers
  id: "dates-2",
  toggleActions: "restart none restart restart",
  animation: dates2TL
});



// 1) grab the iframe and wrap it in a Vimeo.Player instance
const iframe = document.querySelector("#act1-scene1 iframe");
const vimeoPlayer = new Vimeo.Player(iframe);

// 2) create a ScrollTrigger that plays on enter, pauses on leave
ScrollTrigger.create({
  trigger: "#act1-scene1",     // your section
  start:   "top bottom",       // when the top of #act1-scene1 hits the bottom of the viewport
  end:     "bottom top",       // when the bottom of #act1-scene1 hits the top of the viewport
  onEnter:      () => vimeoPlayer.play(),       // scroll down into view
  onEnterBack:  () => vimeoPlayer.play(),       // scroll back up into view
  onLeave:      () => vimeoPlayer.pause(),      // scroll past (down)
  onLeaveBack:  () => vimeoPlayer.pause(),      // scroll past (up)
  // optional:
  scrub:    false,  
  markers:  false
});