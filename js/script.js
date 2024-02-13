document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];
    var toggleDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3', 'toggle-div4', 'toggle-div5', 'toggle-div6', 'toggle-div7', 'toggle-div8', 'toggle-div9'];

    function hideOrShowDivs(clickedIndex) {
        // If clickedIndex is for divs 1-3, toggle visibility within that range. If clickedIndex is for divs 4-9, toggle within that range.
        toggleDivs.forEach(function(divId, index) {
            var div = document.getElementById(divId);
            if (!div) return; // Skip if div is not found

            // Logic for divs 1-3
            if (clickedIndex < 3) {
                if (index < 3) {
                    // Leave divs 1-3 as they are, but ensure the clicked one is visible
                    div.style.display = index === clickedIndex ? 'block' : div.style.display;
                } // Divs 4-9 remain unaffected here
            } else {
                // Logic for divs 4-9
                if (index >= 3) {
                    // Toggle visibility for divs 4-9, based on the clicked button
                    div.style.display = index === clickedIndex ? 'block' : 'none';
                } // Divs 1-3 remain unaffected here
            }
        });
    }

    toggleButtons.forEach(function(buttonId, index) {
        document.getElementById(buttonId).addEventListener('click', function() {
            hideOrShowDivs(index);
        });
    });
});