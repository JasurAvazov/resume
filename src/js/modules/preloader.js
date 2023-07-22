export function init(){
    const preloader = document.querySelector('.preloader')
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            preloader.classList.add('hide')
        }, 1500)
    })
}