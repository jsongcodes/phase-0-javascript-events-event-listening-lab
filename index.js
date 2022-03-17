// document.querySelector('alert').addEventListener('click', () => alert('Hi, I was clicked'))

// document.querySelector('#alert').addEventListener('click', addingEventListener)

function addingEventListener() {
    const input = document.getElementById('input');

    function clickAlert() {
        alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
}

const input = document.getElementById('input');

function clickAlert() {
    alert('I was clicked!');
}

input.addEventListener('click', clickAlert);