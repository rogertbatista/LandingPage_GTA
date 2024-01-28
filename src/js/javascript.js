const btn = document.querySelector('.btn-plataforma');
const plat = document.querySelector('.btn-plataforma .plataformas');

btn.addEventListener('click',() => {
    plat.classList.toggle('ativo')
})