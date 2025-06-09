document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('h2.toggle').forEach((header, index) => {
        if (index === 0) {
            header.classList.add('active');
            const stavkeDiv = header.nextElementSibling;
            stavkeDiv.style.display = 'block';
        }

        header.addEventListener('click', () => {
            header.classList.toggle('active');
            const stavkeDiv = header.nextElementSibling;
            if (stavkeDiv.style.display === 'block') {
                stavkeDiv.style.display = 'none';
            } else {
                stavkeDiv.style.display = 'block';
            }
        });
    });
});
