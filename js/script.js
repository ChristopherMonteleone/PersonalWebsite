// Function to toggle the div
function toggleDiv(divId) {
    var div = document.getElementById(divId);

    // Close all divs
    var allDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3'];
    allDivs.forEach(function(otherDivId) {
        if (otherDivId !== divId) {
            document.getElementById(otherDivId).style.display = 'none';
        }
    });

    // Toggle the clicked div
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

// Initialize toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetDivId = this.getAttribute('data-target');
            toggleDiv(targetDivId);
        });
    });
});