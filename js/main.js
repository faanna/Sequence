const frame = document.querySelector('section');

let imgs = '';
for (let i = 0; i < 200; i++) {
	imgs += `
        <img src="img/pic${i}.jpg">
    `;
}
frame.innerHTML = imgs;

const imgDom = frame.querySelectorAll('img');
let count = 0;
const mask = document.querySelector('aside');
imgDom.forEach((el) => {
	el.addEventListener('load', () => {
		count++;
		const percent = parseInt((count / 200) * 100);
		mask.querySelector('span').innerText = percent;
		mask.querySelector('.bar').style.width = percent + '%';

		if (percent === 100) {
			mask.classList.add('off');
			setTimeout(() => {
				mask.remove();
			}, 2000);
		}
	});
});

window.addEventListener('mousemove', (e) => {
	const wid = window.innerWidth;
	const percent = parseInt((e.pageX / wid) * 200);
	imgDom.forEach((el) => {
		el.style.display = 'none';
	});
	imgDom[percent].style.display = 'block';
});
