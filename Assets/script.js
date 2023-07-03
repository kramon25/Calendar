// In collaboration with classmates Keller V., Sam, and Brou from class

// Wrapped all code that interacts with the DOM in a call to jQuery
$(function () {
  $(document).ready(function () {
    const saveButton = document.querySelector(".saveBtn");

    // TODO: Add code to display the current date in the header of the page.

    $(function () {
      $(document).ready(function () {
        var date = dayjs().format("dddd, MMM DD YYYY h:mma");
        $("#currentDay").html(date);
      });

      // Added code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements
      // Added a listener for click events on the save button.

      var notes = JSON.parse(localStorage.getItem("note")) || {};
      $(".saveBtn").on("click", function () {
        var note = $(this).siblings("textarea").val();
        var hour = $(this).parent().attr("id");
        notes[hour] = note;
        localStorage.setItem("note", JSON.stringify(notes));
      });

      console.log(notes);
      var notes = JSON.parse(localStorage.getItem("note")) || {};
      for (var hour in notes) {
        $("#" + hour + " textarea").val(notes[hour]);
      }
      // Added code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour.

      function updateBoxClasses() {
        const boxes = document.querySelectorAll(".time-block");
        const currentTime = dayjs().hour();

        boxes.forEach((box, index) => {
          const hour = index + 9;

          if (currentTime === hour) {
            box.classList.add("present");
          } else if (currentTime > hour) {
            box.classList.add("past");
          } else {
            box.classList.add("future");
          }
        });
      }

      // get item
      updateBoxClasses();
      setInterval(updateBoxClasses, 60000);
    });
  });
});
