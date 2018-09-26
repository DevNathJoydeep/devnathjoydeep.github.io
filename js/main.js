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
      $(".close").css("color", "#51d3a6");
      $(".formHeading").css("color", "#51d3a6");
      $(".labels").css("color", "#51d3a6");
      $(".formBtn").css("background", "#51d3a6");
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
      $(".close").css("color", "#6a36ff");
      $(".formHeading").css("color", "#6a36ff");
      $(".labels").css("color", "#6a36ff");
      $(".formBtn").css("background", "#6a36ff");
      setTimeout(function() {
        $("meta[name='theme-color']").attr("content", "#4080ff");
      }, 500);
      theme = "blue";
    }
  }

  $("#changeTheme").on("click", function() {
    toggleTheme();
  });

  //----------------------------

  $("#formContainer").fadeOut("fast");

  $("#letsDoItBtn").on("click", function() {
    $("#getInTouchForm").css("width", "100%");
    $("#getInTouchForm").css("height", "100%");
    $("#getInTouchForm").css("top", "0");
    $("#getInTouchForm").css("left", "0");
    setTimeout(function() {
      $("#formContainer").fadeIn("slow");
    }, 500);
  });

  $("#closeForm").on("click", function() {
    $("#formContainer").fadeOut("slow");
    setTimeout(function() {
      $("#getInTouchForm").css("width", "0");
      $("#getInTouchForm").css("height", "0");
      $("#getInTouchForm").css("top", "50%");
      $("#getInTouchForm").css("left", "50%");
    }, 500);
  });

  //----------------------------
});
