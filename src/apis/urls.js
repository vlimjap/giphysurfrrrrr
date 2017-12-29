import config from '../config'

const apiHost = 'api.giphy.com'

export default {
	search: `//${apiHost}/v1/gifs/search?api_key=${config.keys.giphy}`,
  random: `//${apiHost}/v1/gifs/random?api_key=${config.keys.giphy}&rating=g`,
	trending: `//${apiHost}/v1/gifs/trending?api_key=${config.keys.giphy}`,
}