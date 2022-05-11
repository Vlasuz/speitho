// Wow JS

if(document.querySelector('.wow'))
	new WOW().init();

// Wow JS


let akkordion = document.querySelectorAll('.akkordion')
let cc = 0

akkordion.forEach((item) => {

	let itemHeight = item.querySelector('.akkordion__body').offsetHeight
	item.querySelector('.akkordion__body').style.height = '0px'


	item.querySelector('.akkordion__head').onclick = function () {
		this.closest('.akkordion').classList.toggle('akkordion_active')
		if( this.closest('.akkordion').classList.contains('akkordion_active') ){
			this.closest('.akkordion').querySelector('.akkordion__body').style.height = itemHeight+'px';
		}
		else{
			this.closest('.akkordion').querySelector('.akkordion__body').style.height = '0px';
		}
	}
})































