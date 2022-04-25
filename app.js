const qrcontainer = document.getElementById('qr-container');
const form = document.getElementById('form');

const QR = new QRCode(qrcontainer);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	QR.makeCode(form.link.value);
});
