export function init() {
    const alert = document.querySelector('.alert')
    const closeBtn = alert.querySelector('.alert .close')

    closeBtn.addEventListener('click', () => {
        alert.classList.remove('active')
    })
}
