function toggleSidebar() {
  var sidebar = document.querySelector(".custom-sidebar");
  var content = document.querySelector(".main-content");

  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");

    content.style.marginLeft = "240px";
  } else {
    sidebar.classList.add("open");
    content.style.marginLeft = "65px";
  }
}

function moreShort() {
  var shortArea = document.querySelector(".shorts-area");
  var moreIcon = document.querySelector(".show-more-icon");
  var lessIcon = document.querySelector(".show-less-icon");

  if (shortArea.classList.contains("show-more-active")) {
    shortArea.classList.remove("show-more-active");
    moreIcon.style.display = "block";
    lessIcon.style.display = "none";
  } else {
    shortArea.classList.add("show-more-active");
    moreIcon.style.display = "none";
    lessIcon.style.display = "block";
  }
}
