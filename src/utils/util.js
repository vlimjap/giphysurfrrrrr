const validPath = '/search/'

export function createAction(type, payload) {
	return {
		type,
		payload,
	}	
}

export function updateBrowserURL(path) {
  if (path.indexOf(validPath) === 0) {
    window.history.pushState({}, 'Search', path.trim().replace(/\s/g, '-'))
  }
}

export function getSearchPath() {
  const path = window.location.pathname.replace(/%20/ig, '-')

  if (path.indexOf(validPath) === 0) {
    return path.replace(validPath, '').replace(/-/ig, ' ').trim()
  }
}
