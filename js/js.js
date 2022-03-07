$("#faq > section.section_content > div > div > div > div:first-child > a").click(function(e) {
    e.preventDefault();
    let n = e.delegateTarget.dataset.n;
    let active = parseInt(e.delegateTarget.dataset.visible);
    //alert(n);
    let selector = `#faq > section.section_content > div > div:nth-child(${n}) > div:last-child > div:last-child > span:last-child`;
    if (active === 1) {
        $(selector).fadeOut();
        e.delegateTarget.dataset.visible = 0;
    } else {
        $(selector).fadeIn();
        e.delegateTarget.dataset.visible = 1;
    }
});
$('.single-item').slick({
    infinite: true,
    slidesToShow: 1,
    speed: 600,
    autoplay: true,
    arrows: false,
    adaptativeHeight: true
});
/*
$('#agendar .section_content>div>div>div:first-of-type').fadeIn();
*/