// import { fetchData } from './fetch.js';
import FetchNews from './fetch.js';
const formEl = document.querySelector('.js-search-form');
const articles = document.querySelector('.js-articles-container');
const btn = document.querySelector('[data-set]');
const fetchNews = new FetchNews();

formEl.addEventListener('submit', handleOnSubmit);
btn.addEventListener('click', handleOnClick);

function handleOnSubmit(e) {
  e.preventDefault();
  fetchNews.pageReset();
  fetchNews.updatePageParam();
  articles.innerHTML = '';
  const { query } = e.currentTarget.elements;
  fetchNews.query = query.value;
  fetching();
}

function handleOnClick() {
  fetchNews.incrementPage();
  fetchNews.updatePageParam();
  btn.disabled = true;
  fetching().finally(() => (btn.disabled = false));
}

function fetching() {
  return fetchNews
    .fetchData()
    .then(data => {
      fetchNews.totalPages = data.totalResults;
      return data.articles.reduce((acc, markup) => {
        acc += createMarkUp(markup);
        return acc;
      }, ``);
    })
    .then(updateHtml)
    .catch(alert);
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

// fetchData(query.value)
//   .then(data => {
//     return data.articles.reduce((acc, markup) => {
//       acc += createMarkUp(markup);
//       return acc;
//     }, ``);
//   })
//   .then(updateHtml)
//   .then(() => {
//     btn.textContent = 'Искать еще';
//   });
