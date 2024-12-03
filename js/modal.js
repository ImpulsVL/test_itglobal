document.addEventListener('DOMContentLoaded', function() {
    const createButtons = document.querySelectorAll('.create-button');
    const modal = document.querySelector('.modal');
    const cancelButton = document.querySelector('.save-exit-button');

    const cancelButtonMobile = document.querySelector('.close-button-mobile');

    const cancelButtonMobileSecond = document.querySelector('.save-exit-button-mobile');

    createButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');
        });
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    cancelButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    cancelButtonMobile.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    cancelButtonMobileSecond.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});