const accordions = document.querySelectorAll('.accordion')

accordions.forEach(element=>{
    element.addEventListener('click',()=>{
        accorBody = element.querySelector('.accor_body')
        img = element.querySelector('.fa-chevron-down')
        accorBody.classList.toggle ('accor_body_active')
        img.classList.toggle ('img_active')
    })
    
})
