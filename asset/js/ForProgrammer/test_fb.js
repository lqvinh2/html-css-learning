console.log(123);
// $(document).ready(function () {
//   $.ajaxSetup({ cache: true });
//   $.getScript("https://connect.facebook.net/en_US/sdk.js", function () {
//     FB.init({
//       appId: "520316852431701",
//       version: "v2.7", // or v2.1, v2.2, v2.3, ...
//     });
//     $("#loginbutton,#feedbutton").removeAttr("disabled");
//     FB.getLoginStatus((res) => {
//       console.log(res);
//     });
//   });
// });

$(function () {
  var jqueryTitle_firstTitle = $(document).attr("title");
  var $d = $(document);
  $d.attr("title", "set title");

  let header_menu = $("#app-sps-global-header__menu").children();
  // header_menu[0].attr("title", "new title");

  let at1 = $(header_menu[0]);
  //at1.attr("title", "new title");
  SetTitleHeadeMenu(at1, "new title 123");

  // function set Title with jq
  function SetTitleHeadeMenu(tagJQ, newTitle) {
    tagJQ.attr("title", newTitle);
  }
});
