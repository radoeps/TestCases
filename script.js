document.addEventListener('DOMContentLoaded', () => {
    const birthdayMessage = document.getElementById('birthdayMessage');
    const modal = document.getElementById('birthdayModal');
    const closeButton = document.querySelector('.close');
    const tooltip = document.getElementById('tooltip');
    let message = "Happy Birthday, \nPierre!";
    let index = 0;

    // Type message
    function typeMessage() {
        if (index < message.length) {
            birthdayMessage.textContent += message[index++];
            setTimeout(typeMessage, 150); // Delay between characters
        }
    }

    // Rotate message on mouse move
    function rotateOnMouse(e) {
        const rect = birthdayMessage.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const theta = Math.atan2(y, x) * (180 / Math.PI) + 90;
        birthdayMessage.style.transform = `rotate(${theta}deg)`;
        birthdayMessage.style.transition = 'none'; // Disable transition
    }

    // Reset rotation
    function resetRotation() {
        birthdayMessage.style.transform = 'rotate(0deg)';
        birthdayMessage.style.transition = 'transform 0.5s ease';
    }

    // Mouse events
    birthdayMessage.addEventListener('mouseover', () => {
        tooltip.style.display = 'block'; // Show tooltip
    });

    birthdayMessage.addEventListener('mousemove', (e) => {
        tooltip.style.left = (e.pageX + 10) + 'px'; // Position tooltip
        tooltip.style.top = (e.pageY + 10) + 'px';
        rotateOnMouse(e);
    });

    birthdayMessage.addEventListener('mouseout', () => {
        tooltip.style.display = 'none'; // Hide tooltip
        resetRotation();
    });

    // Show and hide modal
    birthdayMessage.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    setTimeout(typeMessage, 1000);
});
