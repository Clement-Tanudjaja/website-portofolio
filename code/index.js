// const hero = document.getElementById('hero')
const goBack = document.getElementById('go-back')
const hero = document.querySelectorAll('.hero')

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        goBack.classList.add('hidden')
      }
      else {
        goBack.classList.remove('hidden')
      }
    })
  })

  hero.forEach((el)=> observer.observe(el))

