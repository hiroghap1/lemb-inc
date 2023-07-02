gsap.registerPlugin(ScrollTrigger);
    const stagger = 0.05;
    gsap.utils.toArray(".fadeIn").forEach((el) => {
        gsap.fromTo(el,
            {
                alpha: 0,
                y: 20,

            },
            {
                alpha: 1,
                y: 0,
                duration: 0.75,
                delay: 0.2,
                stagger,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%'
                },                },
            "<",
        );
    });