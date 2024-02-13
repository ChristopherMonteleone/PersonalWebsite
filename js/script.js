document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];

    function toggleDivVisibility(clickedButtonId) {
        var clickedIndex = parseInt(clickedButtonId.replace('toggle-button', '')) - 1;
        var isGroup1 = clickedIndex < 3;

        if (isGroup1) {
            // Hide all divs in group 1 (1-3) except the clicked one
            for (var i = 0; i < 3; i++) {
                var divId = 'toggle-div' + (i + 1);
                var div = document.getElementById(divId);
                div.style.display = i === clickedIndex ? 'block' : 'none';
            }
        } else {
            // For Group 2 (4-9), hide all in this group except the clicked one
            for (var i = 3; i < toggleButtons.length; i++) {
                var divId = 'toggle-div' + (i + 1);
                var div = document.getElementById(divId);
                div.style.display = i === clickedIndex ? 'block' : 'none';
            }
        }
    }

    toggleButtons.forEach(function(buttonId) {
        document.getElementById(buttonId).addEventListener('click', function() {
            toggleDivVisibility(buttonId);
        });
    });
});