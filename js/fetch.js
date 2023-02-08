const URL = 'https://newsapi.org/v2/everything?';
const options = {
  headers: { Authorization: '02bb415c0697483b9ce3d12a7a619db3' },
};
let page = 1;
const pageSize = 1;

export function fetchData(query) {
  const params = new URLSearchParams({
    pageSize: pageSize,
    page: page,
  });

  return fetch(`${URL}q=${query}&${params}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    page += 1;
    return response.json();
  });
}
