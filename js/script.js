document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = ['toggle-button1', 'toggle-button2', 'toggle-button3'];
    var toggleDivs = ['toggle-div1', 'toggle-div2', 'toggle-div3'];

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