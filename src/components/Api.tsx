import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResult } from '../types'
import { createApi } from '@reduxjs/toolkit/query/react'


export const heroesApi = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://swapi.dev/api/people/`,
  }),
  endpoints: (builder) => ({
    getHeroes: builder.query<ApiResult, string>({
      query: (str: string) => `${str}`,
    }),
  }),
})
 export const { useGetHeroesQuery } = heroesApi
