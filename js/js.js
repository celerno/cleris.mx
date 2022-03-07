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
    speed: 700,
    autoplay: true,
    arrows: false,
    adaptativeHeight: true
});
$('#prospectos').submit(function(e) {
    e.preventDefault();
    let datos = $(e.target).serializeObject();
    let url = 'https://script.google.com/macros/s/AKfycby2WYEFo_kfM55AEHIl7kZlf4W1GpNCQAuPawAFgZYNOH5Dziw0oZHAbfC6YelFBKW-/exec';
    $.ajax({
        crossDomin: true,
        redirect: "follow",
        url: url,
        method: "POST",
        dataType: "json",
        data: datos,
        success: function(data) {
            $('.gracias').fadeIn(1000).fadeOut(300);
            console.log(data);
        },
        error: function(error) {
            //  alert(error);
        }
    });
});
/*
$('#agendar .section_content>div>div>div:first-of-type').fadeIn();
*/