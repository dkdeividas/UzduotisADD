import { creatingRegForm } from "./regFormModule.js";

function firstPageRender() {
    const headerContainer = document.querySelector('.headerContainer');
    headerContainer.style.display = 'none';
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.innerHTML = `
    
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary firstEntryBtn">Enter</button>
    </div>`

    const firstEntryBtn = document.querySelector('.firstEntryBtn');
    firstEntryBtn.addEventListener('click', () => {
        carouselContainer.style.display = 'none';
        headerContainer.style.display = 'block';
        creatingRegForm();
    })
}

export { firstPageRender }