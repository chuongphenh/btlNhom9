
$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    // arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    
    arrows: true,
    fade: true,
    asNavFor: '.image-slider__nav', 

   
    //   responsive: [
    //     {
    //       breakpoint: 1025,
    //       settings: {
    //         slidesToShow: 1,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         arrows: false,
    //         infinite: false,
    //       },
    //     },
    //   ],
    // autoplay: true,
    // autoplaySpeed: 1000,

  });

  // $('.image-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.image-slider__nav'
  // });
  $('.image-slider__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.image-slider',
    dots: false,
    centerMode: true,
    // centerPadding: '30px',
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    draggable: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.buy_sp__color').slick({
     rows: 1,
    initialSlide:0,
    // useCSS:true,
    // vertical:true,
    
    // useTransform:true,
    slidesToShow: 3,
    // slidesToScroll: 1,
    arrows: false,
    asNavFor: '.image-slider',
    dots: false,
    // centerMode: true,
    // centerPadding: '30px',
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    draggable: true,
    // responsive: [{
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
  $('.buy_sp__color1').slick({
    // adaptiveHeight:true,
    initialSlide:4,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.image-slider',
    dots: false,
    // centerMode: true,
    // centerPadding: '30px',
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    draggable: true,
    // responsive: [{
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
  
});

