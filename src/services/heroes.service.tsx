import axios from 'axios'
const API_URL = `https://swapi.dev/api`
axios.defaults.baseURL = API_URL

export const HeroesService = {
	async getHeroes(page: string) {
		const { data } = await axios.get(`/people/?page=${page}`)
    return data
  },
  // async getHero(id: string) {
  //   const { data } = await axios.get('/people', { params: { id } })
  //   return data[0]
  // },
}
