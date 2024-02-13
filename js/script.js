document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];
    var toggleDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3', 'toggle-div4', 'toggle-div5', 'toggle-div6', 'toggle-div7', 'toggle-div8', 'toggle-div9'];

    function hideDivsExcept(exceptIndex) {
        toggleDivs.forEach(function(divId, index) {
            // Check if current index is in the same group as exceptIndex
            var isSameGroup = (exceptIndex <= 2 && index <= 2) || (exceptIndex >= 3 && index >= 3);
            var div = document.getElementById(divId);
            if (div) {
                // Hide divs not in the same group or not the clicked one
                div.style.display = isSameGroup && index === exceptIndex ? 'block' : 'none';
            }
        });
    }

    toggleButtons.forEach(function(buttonId, index) {
        document.getElementById(buttonId).addEventListener('click', function() {
            // No need to call hideAllDivs here; hideDivsExcept handles it
            hideDivsExcept(index);
        });
    });
});