document.addEventListener("DOMContentLoaded", function () {
    var video = document.createElement("video");
    video.src = "../img/ship.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    var videoContainer = document.getElementById("video-container");
    videoContainer.appendChild(video);

  /*SCROLL*/
    var scrollButton = document.getElementById("scroll-button");
      scrollButton.addEventListener("click", function() {
        var content = document.getElementById("ctnt");
        content.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
  });

  function searchFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
  
    // Get the input field and its value
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
  
    // Get the unordered list and its list items with the class 'tags'
    ul = document.getElementById('suppliers');
    li = ul.getElementsByClassName('tags');
  
    // Loop through all list items, and hide/show those that match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
  
      // Check if the text content of the current list item matches the search query
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';  // Show the list item
  
        // Get the parent container of the current list item and show it
        li[i].closest('.container').style.display = '';
      } else {
        li[i].style.display = 'none';  // Hide the list item
  
        // Get the parent container of the current list item and hide it
        li[i].closest('.container').style.display = 'none';
      }
    }
  }
  
 