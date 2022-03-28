const config = {
    type: "loop",
    gap: '1rem',
    classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
    },
    perPage: 3,
    perMove: 1,
    breakpoints: {
        768: {
            perPage: 1,
            gap: 0,
        }
    }
}

const config2 = {
    type: "loop",
    gap: '1rem',
    classes: {
            arrows: 'splide__arrows testimonial-arrows',
            arrow : 'splide__arrow testimonial-arrow',
            prev  : 'splide__arrow--prev testimonial-prev',
            next  : 'splide__arrow--next testimonial-next',
    },
    perPage: 3,
    perMove: 1,
    breakpoints: {
        768: {
            perPage: 1,
            gap: 0,
        }
    }
}

var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 4,
    breakAt: {
        1200: 4,
        940: 3,
        520: 2,
        400: 1
    }
});

new Splide( '.splide', config).mount();
new Splide( '.splide2', config2).mount();