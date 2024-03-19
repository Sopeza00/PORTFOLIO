document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab-link');

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var tabId = this.parentElement.id;
        var tabContent = document.querySelector('#' + tabId + ' .tab-content');

        // Toggle the visibility of the tab content
        tabContent.style.display = (tabContent.style.display === 'none' || tabContent.style.display === '') ? 'block' : 'none';

        // Hide other tab contents
        tabs.forEach(function(otherTab) {
          var otherTabId = otherTab.parentElement.id;
          if (otherTabId !== tabId) {
            document.querySelector('#' + otherTabId + ' .tab-content').style.display = 'none';
          }
        });
      });
    });
  });





  function changeColor(element) {
    var colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Array of colors you can choose from
    var randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color from the array
    element.style.color = randomColor;
  }