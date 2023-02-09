// const BASE_URL = 'https://newsapi.org/v2/everything?';
// const options = {
//   headers: { Authorization: '02bb415c0697483b9ce3d12a7a619db3' },
// };
// let page = 1;
// const pageSize = 1;

// export function fetchData(query) {
//   const params = new URLSearchParams({
//     pageSize: pageSize,
//     page: page,
//   });

//   return fetch(`${URL}q=${query}&${params}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     page += 1;
//     return response.json();
//   });
// }

export default class FetchNews {
  constructor() {
    this.BASE_URL = 'https://newsapi.org/v2/everything?';
    this.querySearch = '';
    this.page = 1;
    this.totalPages = null;
    this.options = {
      headers: { Authorization: '02bb415c0697483b9ce3d12a7a619db3' },
    };
    this.params = new URLSearchParams({
      pageSize: 5,
      page: this.pageValue,
    });
  }
  get query() {
    return this.querySearch;
  }
  set query(newQuery) {
    this.querySearch = newQuery;
  }

  get pageValue() {
    return this.page;
  }
  set pageValue(newPageValue) {
    this.page = newPageValue;
  }

  fetchData() {
    return fetch(
      `${this.BASE_URL}q=${this.querySearch}&${this.params}`,
      this.options,
    ).then(response => {
      if (!response.ok) throw new Error(response.status);

      return response.json();
    });
  }
  incrementPage() {
    this.page += 1;
  }
  updatePageParam() {
    this.params.set('page', this.page);
  }

  pageReset() {
    this.page = 1;
  }

  getTotalEl() {
    return this.params.get('pageSize') * this.params.get('page');
  }
}
