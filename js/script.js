document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3', 'toggle-button4', 'toggle-button5', 'toggle-button6', 'toggle-button7', 'toggle-button8', 'toggle-button9'];
    var toggleDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3', 'toggle-div4', 'toggle-div5', 'toggle-div6', 'toggle-div7', 'toggle-div8', 'toggle-div9'];

    function hideAllDivs() {
        toggleDivs.forEach(function(divId) {
            var div = document.getElementById(divId);
            if (div) {
                div.style.display = 'none';
            }
        });
    }

    toggleButtons.forEach(function(buttonId, index) {
        document.getElementById(buttonId).addEventListener('click', function() {
            hideAllDivs();
            var div = document.getElementById(toggleDivs[index]);
            if (div.style.display === 'none') {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });
    });
});