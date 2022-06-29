async function sendContact(ev) {
    ev.preventDefault();

    const senderName = document
        .getElementById('name').value;
    const senderEmail = document
        .getElementById('email').value;
    const senderSubject = document
        .getElementById('subject').value;
    const senderMessage = document
        .getElementById('message').value;

    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
                { name: 'Sender', value: senderName },
                { name: 'Email', value: senderEmail },
                { name: 'Subject', value: senderSubject },
                { name: 'Message', value: senderMessage }
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/973610085119053934/S6MyEH2vYHpC2r2eI-oxacYpq3VTP2rEiTkW4Z7d2IAo4mLHDc6o_p2iTYhavERxUElT';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
    } else {
        alert('There was an error! Try again later!');
    }
}

const red = document.getElementById('red')
const blue = document.getElementById('blue')
const purple = document.getElementById('purple')

red.addEventListener('click', () => {
    document.documentElement.style.setProperty("--acent-color", "red");
})
blue.addEventListener('click', () => {
    document.documentElement.style.setProperty("--acent-color", "#0a6165");
})
purple.addEventListener('click', () => {
    document.documentElement.style.setProperty("--acent-color", "#682860");
})