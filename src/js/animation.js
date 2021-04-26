import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".carContainer").forEach(function(e) {
    let names = e.querySelectorAll(".carNames");
    let cars = e.querySelectorAll(".car");
    let desc = e.querySelectorAll(".carDesc");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: e,
            pin: e,
            scrub: 0.5,
            start: "top top",
            end: "+=200%",
            // markers:true
        }
    })
    .from(desc, {xPercent: -200, duration: 1, ease:'power2.out', stagger:0.6},0)
    .from(cars, {xPercent: 50, duration: 1, ease:'power2.out', stagger:0.6},0)
    .from(names, {xPercent: -100, duration: 1, ease:'power2.out', stagger:0.6},0)
    // .to({}, {duration:1})
    
})