gsap.registerPlugin(ScrollTrigger);

// Imposta comportamenti diversi per diverse larghezze schermo
ScrollTrigger.matchMedia({

    // Desktop: schermo sopra i 550px
    "(min-width: 551px)": function () {
        gsap.to(".textItem", {
            xPercent: -80,
            ease: 'none',
            scrollTrigger: {
                scrub: true,
                start: "10% top",
                end: "+=2000",
            }
        });
    },

    // Mobile: schermo fino a 550px
    "(max-width: 550px)": function () {
        gsap.to(".textItem", {
            xPercent: -100, // o nessuna animazione
            ease: 'none',
            scrollTrigger: {
                scrub: true,
                start: "450px top",
                end: "+=1000", // adatta la distanza per mobile
            }
        });
    }

});















gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".card__article").forEach((card) => {
    gsap.fromTo(card,
        {
            opacity: 0,
            y: 80,
            scale: 0.95,
            filter: "blur(6px)",
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 30%",
                scrub: true, // 🎯 legato allo scroll
                markers: false
            }
        }
    );
});

















initMarquee(190, 60)

function initMarquee(boxWidth, time) {
    const boxElement = $('.box');
    const boxLength = boxElement.length;
    const wrapperWidth = boxWidth * boxLength;
    const windowWidth = $(window).width();

    boxElement.parent().css('left', '-' + boxWidth + 'px');
    boxElement.css('width', boxWidth + 'px');

    gsap.set(".box", {
        x: (i) => i * boxWidth
    });

    gsap.to(".box", {
        duration: time,
        ease: "easeInOut",
        x: "-=" + wrapperWidth,
        modifiers: {
            x: gsap.utils.unitize(
                function (x) {
                    return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
                }
            )
        },
        repeat: -1
    });

}