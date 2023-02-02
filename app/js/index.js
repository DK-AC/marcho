$(
    function () {
        $('.top-slider__inner').slick({
            dots: true,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
        })
    },
    $(function () {
        $('.product-star').rateYo({
            starWidth: '18px',
            normalFill: '#ccccce',
            ratedFill: '#ffc35b',
            readOnly: true,
        })
    }),
)

