$(function(){
  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      useClassNames: true,
    });
  }

  $(window).on('load', function() {
    aos_init();
  });


  // Sorting using isotope START
//   var $grid = $('.grid').isotope({
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows',
//     getSortData: {
//       name: function (element) {
//         return $(element).text();
//       }
//     }
//   });
//   $('.filter button').on("click", function () {
//     var value = $(this).attr('data-name');
//       $grid.isotope({
//         filter: value
//       });
//     $('.filter button').removeClass('active');
//     $(this).addClass('active');
//   })
//   $('.sort button').on("click", function () {
//     var value = $(this).attr('data-name');
//     $grid.isotope({
//       sortBy: value
//     });
//     $('.sort button').removeClass('active');
//     $(this).addClass('active');
//   })


// 1 Init Isotope
var $grid = $('.table').isotope({
    itemSelector: '.rowA',
    layoutMode: 'fitRows',
    getSortData: {
      name: function (element) {
        return $(element).children().next().html();
      }
    }
  });

  // 2. Get all tag has class isotope, delete all style  "<tr class="isotope rowA fruit">
$( ".isotope" ).each(function() {
    $( this ).attr( "style","" );
  });

  // 3 filter
  $('.filter button').on("click", function () {
    var value = $(this).attr('data-name');
      $grid.isotope({
        filter: value
      });
  })
  $('.sort button').on("click", function () {
    var value =  $(this).attr('data-name');
    $grid.isotope({
      sortBy: value
    });

  })
  // Sorting using isotope END

  
})