document.addEventListener('DOMContentLoaded', function() {
    var desplegables = document.querySelectorAll('.desplegable');
    desplegables.forEach(function(desplegable) {
        desplegable.addEventListener('click', function() {
            this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
        });
    });
});