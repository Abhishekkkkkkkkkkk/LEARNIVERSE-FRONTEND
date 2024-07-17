document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".playlist-tabs .tab");
    const contents = document.querySelectorAll(".playlist-content");
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        // Hide all content
        contents.forEach(content => {
          content.style.display = "none";
        });
  
        // Show only the clicked content
        contents[index].style.display = "block";
  
        // Remove active class from all tabs
        tabs.forEach(tab => {
          tab.classList.remove("active");
        });
  
        // Add active class to clicked tab
        tab.classList.add("active");
      });
    });
  });