import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.refresh()


gsap.utils.toArray(".carContainer").forEach(function (e) {
    let names = e.querySelectorAll(".carNames");
    let cars = e.querySelectorAll(".car");
    let desc = e.querySelectorAll(".carDesc");
    let logo = e.querySelector(".buggatiLogo");
    let firstScrollBottom = e.querySelector(".firstScrollBottom");
    

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
        .from(names, {
            xPercent: -150,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.6
        }, 0)
        .from(cars, {
            xPercent: 160,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.6
        }, 0)
        .from(desc, {
            xPercent: -150,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.6
        }, 0)
        .from(logo, {
            yPercent: 100,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.6
        }, 0)
        .from(firstScrollBottom, {
            xPercent: 150,
            duration: 5,
            ease: 'power2.out',
            stagger: 0.6
        }, 0)
        .to({}, {
            duration: 0.3
        })
})