
var today = dayjs();

$(function displayTime() {
  $('#currentDay').text(today.format('dddd, MMMM D'));
  });

$(document).ready(function() {
  updateTimeBlockClass();
});

$(".saveBtn").on("click", function(){
var time = $(this).attr("id");
var text = $(this).siblings("textarea").val();
localStorage.setItem(time, text);
});

  $("textarea").each(function() {
    var id = $(this).attr("id");
    var value = localStorage.getItem(id);
 
    if (value !== null) {
      $(this).val(value);
    }
  });

  function updateTimeBlockClass() {
    var currentHour = dayjs().hour();
  
    $(".time-block").each(function() {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
  
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      }
      else if (timeBlockHour === currentHour) {
        $(this).addClass("present");
      }
      else {
        $(this).addClass("future");
      }
    });
  }

  