
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();


$(".saveBtn").on("click", function(){
var time = $(this).attr("id")
var text = $(this).siblings("textarea").val()
localStorage.setItem(time, text)
});

  $("textarea").each(function() {
    var id = $(this).attr("id");
    var value = localStorage.getItem(id);
 
    if (value !== null) {
      $(this).val(value);
    }
  });

$(function curentTime() {
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
});



$(function displayTime() {
$('#currentDay').text(today.format('dddd, MMMM D'));
});