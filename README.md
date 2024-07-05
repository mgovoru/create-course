# create-course
не нужен там никакой контекст (по крайней мере сейчас)

компонент SearchBar, (форма с инпутом, кнопкой и колбеком ввденной строки)
компонент ListView c пропсом data для отображения результатов
компонент - контейнер - содержащий в себе SearchBar, ListView, Loader, "состояние" и с логикой запроса на БЭ, localStarage etc. 
import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

const api = axios.create({
  baseURL: BASE_URL,
})

export const getPeople = async (search: string) => {
  const { data } = await api.get(`people?search=${search}`)
  return data
}
