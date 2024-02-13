document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];
    var toggleDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3', 'toggle-div4', 'toggle-div5', 'toggle-div6', 'toggle-div7', 'toggle-div8', 'toggle-div9'];

    function hideOrShowDivs(clickedIndex) {
        // Determine the group of the clicked button
        var group = clickedIndex < 3 ? 'firstGroup' : 'secondGroup';

        toggleDivs.forEach(function(divId, index) {
            var div = document.getElementById(divId);
            if (div) {
                if (group === 'firstGroup' && index < 3) {
                    // Show or hide divs in the first group (1-3)
                    div.style.display = index === clickedIndex ? 'block' : 'none';
                } else if (group === 'secondGroup' && index >= 3) {
                    // Show or hide divs in the second group (4-9)
                    div.style.display = index === clickedIndex ? 'block' : 'none';
                } else if (group === 'firstGroup' && index >= 3) {
                    // Ensure divs in the second group remain visible when a div in the first group is clicked
                    div.style.display = 'block';
                }
                // If a div in the second group is clicked, divs in the first group should not be affected and remain as they are
            }
        });
    }

    toggleButtons.forEach(function(buttonId, index) {
        document.getElementById(buttonId).addEventListener('click', function() {
            hideOrShowDivs(index);
        });
    });
});