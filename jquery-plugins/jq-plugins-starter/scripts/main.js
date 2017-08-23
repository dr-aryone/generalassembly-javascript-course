$(function() {


  /* Fancybox */
  $('.fancybox a').fancybox();

  /* slick */
  $('.carousel').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5,
  });

  /* Data tables */
  $('#example').DataTable();


});
