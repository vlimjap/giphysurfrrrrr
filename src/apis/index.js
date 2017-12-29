import urls from './urls'

export function goSearch(params) {
  const { offset, search } = params
  const url = offset ? `${urls.search}&q=${search}&offset=${offset}` : `${urls.search}&q=${search}`
  
  return goFetch(url)
}

export function getTrending(params) {
  const { offset } = params
  const url = offset ? `${urls.trending}&offset=${offset}` : urls.trending

  return goFetch(url)
}

export function getRandom() {
  return goFetch(`${urls.random}&tag=wework`)
}

function goFetch(url, params = {}) {
  const parameters = {
    ...params,
    method: 'GET'
  }

  return fetch(url, parameters)
    .then(response => responseHandler(response))
    .catch(error => errorHandler(error))
}

//UTILS
function responseHandler(resp) {
  return resp.json().then(json => json)
}

function errorHandler(error) {
  console.error('FETCH ERROR: ', error)
}
