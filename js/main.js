$(document).ready(function() {
  //initial load loads blue theme
  var theme = "blue";

  //path to the backgrounds
  var blueHeader = "../images/heroBg.svg";
  var blueFooter = "../images/footerBg.svg";
  var greenHeader = "../images/heroBgGreen.svg";
  var greenFooter = "../images/footerBgGreen.svg";

  /*function getCurrentTheme() {
    if (theme === "blue") {
      console.log("Blue theme is applied");
      return "blue";
    } else {
      console.log("Green theme is applied");
      return "green";
    }
  }*/

  $(".resumeButton").on("mouseenter focus", function() {
    console.log("hovered");
    if (theme === "blue") {
      $(this).css("color", "#3b2f61");
    } else {
      $(this).css("color", "#075144");
    }
  });
  $(".btnSmall, .btnLarge").on("mouseenter focus", function() {
    console.log("hovered");
    if (theme === "blue") {
      $(this).css("color", "#5954ff");
    } else {
      $(this).css("color", "#39c493"); //change this
    }
  });
  $(".resumeButton, .btnSmall, .btnLarge").on("mouseleave", function() {
    console.log("unhovered");
    $(this).css("color", "white");
  });

  function toggleTheme() {
    if (theme === "blue") {
      console.log("Changing theme to green");
      $("#hero").css("background-image", "url(" + greenHeader + ")");
      $("#footer").css("background-image", "url(" + greenFooter + ")");
      $(".skillIcons").css("color", "#51d3a6");
      $(".violet").css("color", "#51d3a6");
      $("#myResume").css("background", "#075144");
      $(".workDesc").css("background", "rgba(7,81,68,0.85)");
      $(".workButton").css("color", "#39c493");
      setTimeout(function() {
        $("meta[name='theme-color']").attr("content", "#5db7d4");
      }, 500);
      theme = "green";
    } else {
      console.log("Changing theme to blue");
      $("#hero").css("background-image", "url(" + blueHeader + ")");
      $("#footer").css("background-image", "url(" + blueFooter + ")");
      $(".skillIcons").css("color", "#6a36ff");
      $(".violet").css("color", "#6a36ff");
      $("#myResume").css("background", "#3b2f61");
      $(".workDesc").css("background", "rgba(106, 54, 255, 0.85)");
      $(".workButton").css("color", "#6a36ff");
      setTimeout(function() {
        $("meta[name='theme-color']").attr("content", "#4080ff");
      }, 500);
      theme = "blue";
    }
  }

  $("#changeTheme").on("click", function() {
    toggleTheme();
  });
});
