function burgerMenu() {
  const burger = document.querySelector('.burger')
  const navigation = document.querySelector('.header__navigation')
  const overlay = document.querySelector('.overlay')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    navigation.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.add('scroll-lock')
  })

  overlay.addEventListener('click', () => {
    burger.classList.remove('active')
    navigation.classList.remove('active')
    overlay.classList.remove('active')
    document.body.classList.remove('scroll-lock')
  })

  // window.addEventListener("resize", () => {
  // 	if (window.innerWidth > 991.98) {
  // 		burger.classList.remove("active")
  // 		navigation.classList.remove("active")
  // 		overlay.classList.remove("active")
  // 	}
  // })
}
burgerMenu()