gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#section-prologue",        // the element you want to pin
  start:   "top top",       // when its top hits the top of the viewport
  end:     "bottom top",    // when its bottom hits the top of the viewport
  pin:     true,            // pin it in place
  pinSpacing: true,        // (optional) remove the extra blank space it normally leaves
  // scrub: true,           // (optional) tie any attached tweens to the scroll position
  markers: true             // (optional) shows visual start/end markers
});

ScrollTrigger.create({
  trigger: "#act1-scene1",        // the element you want to pin
  start:   "top top",       // when its top hits the top of the viewport
  end:     "bottom top",    // when its bottom hits the top of the viewport
  pin:     true,            // pin it in place
  pinSpacing: true,        // (optional) remove the extra blank space it normally leaves
  // scrub: true,           // (optional) tie any attached tweens to the scroll position
  markers: true             // (optional) shows visual start/end markers
});