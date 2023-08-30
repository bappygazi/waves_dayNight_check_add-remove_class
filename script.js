/** @format */

$(function () {
  $("input:checkbox").change(function () {
    if ($(this).is(":checked")) {
      $(".wave-bg").addClass("waves-fill");
    } else {
      $(".wave-bg").removeClass("waves-fill");
    }
  });
});
