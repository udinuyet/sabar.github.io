
const img = document.querySelector(".content .kado")
const kata = document.querySelector(".content .kata")
const button = document.querySelectorAll(".content button")
const ctn = document.querySelector(".content")

function clik (btn){
  btn.textContent == "Sayang banget 🤗" ? img.src = "img/4e77a0ad-dff3-4775-9c71-83a8cc81461b.webp" : img.src = "img/bb17f9c0-7305-4d42-9612-5e020461d2ca.webp" 
  button[0].style.display = "none"
  button[1].style.display = "none"
  ctn.style.height = "350px"
  ctn.style.width = "370px"
  return btn.textContent == "Sayang banget 🤗" ? kata.textContent = "hehe maacii, love u pangeran babikku😽" : kata.textContent = "DIH, PACARAN AJA LO SAMA IGUN!😾😾"
  
}
function content(){
  ctn.style.width = "450px"
  ctn.style.height = "450px"
  ctn.style.borderRadius = "5px"
  kata.textContent = "Jujur, sebenarnya kamu sayang aku ga sih?😿😿"
}
function pesanHilang(){
  const divpesan = document.querySelector("div.pesan")
  divpesan.style.display = "none"
  content()
  fullLayar()
  musik()
}

function fullLayar() {
			var elem = document.documentElement;

			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Safari */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE11 */
				elem.msRequestFullscreen();
			}

		}

setTimeout(()=>{
  const span = document.querySelector("div.pesan span")
  span.style.opacity = ".2"
  musik()
}, 1000)

function musik(){
  const msk = document.getElementById("lagu")
  msk.play()
  msk.loop = true
}
setInterval(musik, 147000)


