const lenis = new Lenis({
    duration: 2.2,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);
let mm = gsap.matchMedia();