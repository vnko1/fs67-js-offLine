import { fetchData } from './fetch.js';
const formEl = document.querySelector('.js-search-form');
const articles = document.querySelector('.js-articles-container');
const btn = document.querySelector('.btn-primary');
formEl.addEventListener('submit', handleOnSubmit);

function handleOnSubmit(e) {
  e.preventDefault();
  const { query } = e.currentTarget.elements;
  fetchData(query.value)
    .then(data => {
      return data.articles.reduce((acc, markup) => {
        acc += createMarkUp(markup);
        return acc;
      }, ``);
    })
    .then(updateHtml)
    .then(() => {
      btn.textContent = 'Искать еще';
    });
}

function createMarkUp({ urlToImage, title, author, description, url }) {
  return `<div class="article-card">
    <img src=${urlToImage} class="article-img" width = '400'/>
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || 'no author'}</h3>
    <p  class="article-description">${description}</p>
    <a href=${url} class="article-link" target="_blank">Read more</a>
  </div>`;
}

function updateHtml(markup) {
  articles.insertAdjacentHTML('beforeend', markup);
}
