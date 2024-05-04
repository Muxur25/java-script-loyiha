const tugmalar = document.querySelectorAll('.tabheader__item'),
	malumotlar = document.querySelectorAll('.tab_content'),
	tugmaOtasi = document.querySelector('.tabheader__items')

function hideContent() {
	malumotlar.forEach(item => {
		item.classList.add('hide')
		item.classList.remove('show')
	})

	tugmalar.forEach(item => {
		item.classList.remove('tabheader__item_active')
	})
}

hideContent()
showContent()

function showContent(index = 0) {
	tugmalar[index].classList.add('tabheader__item_active')
	malumotlar[index].classList.add('show')
	malumotlar[index].classList.remove('hide')
}

tugmaOtasi.addEventListener('click', e => {
	const target = e.target
	if (target && target.classList.contains('tabheader__item')) {
		tugmalar.forEach((item, idx) => {
			if (target === item) {
				hideContent()
				showContent(idx)
			}
		})
	}
})
