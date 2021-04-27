import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh()


gsap.utils.toArray(".carContainer").forEach(function(e) {
    let names = e.querySelectorAll(".carNames");
    let cars = e.querySelectorAll(".car");
    let desc = e.querySelectorAll(".carDesc");
    let logo = e.querySelector(".buggatiLogo");

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
    .from(names, {xPercent: -100, duration: 1, ease:'power2.out', stagger:0.6},0)
    .from(desc, {xPercent: -100, duration: 1.5, ease:'power2.out', stagger:0.6},0)
    .from(cars, {xPercent: 100, duration: 0.8, ease:'power2.out', stagger:0.6},0)
    .from(logo, {yPercent: 100, duration: 2, ease:'power2.out', stagger:0.6},0)
    .to({}, {duration:0.5})
    
})