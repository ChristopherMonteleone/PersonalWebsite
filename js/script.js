document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggle-button1').addEventListener('click', function() {
        var div = document.getElementById('toggle-div1');
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('toggle-button2').addEventListener('click', function() {
        var div = document.getElementById('toggle-div2');
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('toggle-button3').addEventListener('click', function() {
        var div = document.getElementById('toggle-div3');
        div.style.display = div.style.display === 'none' ? 'block' : 'none';
    });
});