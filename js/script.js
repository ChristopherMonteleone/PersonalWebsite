document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];

    function toggleDivVisibility(clickedIndex) {
        // Determine the group of the clicked button
        var isGroup1 = clickedIndex < 3;
        var targetDivId = 'toggle-div' + (clickedIndex + 1); // Assuming div IDs follow the pattern "toggle-divX"
        var divToShow = document.getElementById(targetDivId);

        if (isGroup1) {
            // For buttons 1-3, simply toggle the corresponding div without hiding others in the group
            divToShow.style.display = divToShow.style.display === 'none' ? 'block' : 'none';
        } else {
            // For buttons 4-9, hide all divs in the range 4-9 except the clicked one
            for (var i = 3; i < toggleButtons.length; i++) {
                var divId = 'toggle-div' + (i + 1);
                var div = document.getElementById(divId);
                if (div) {
                    div.style.display = i === clickedIndex ? 'block' : 'none';
                }
            }
        }
    }

    toggleButtons.forEach(function(buttonId, index) {
        document.getElementById(buttonId).addEventListener('click', function() {
            toggleDivVisibility(index);
        });
    });
});