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

const countDownDate = new Date('Jul 3, 2023 00:00:00').getTime()

const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDownDate - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.querySelector('.promo__days').innerHTML = `${days}`
    document.querySelector('.promo__hours').innerHTML = `${hours}`
    document.querySelector('.promo__minutes').innerHTML = `${minutes}`
    document.querySelector('.promo__seconds').innerHTML = `${seconds}`
    if (distance < 0) {
        clearInterval(x)
        document.querySelector('.promo__clock').innerHTML = 'Time\'s Up!'
    }
}, 1000)
