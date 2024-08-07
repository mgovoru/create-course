import React from 'react'
import { Container } from '../components/Container/Container'
import { GetServerSideProps, NextPage } from 'next'
import { HeroesService } from '../services/heroes.service'
import { ApiResponse } from '../base/types'
interface PropsAny {
  data: ApiResponse
}
const IndexPage: NextPage<PropsAny> = ({ data }) => {
  return (
    <Container
      count={data.count}
      next={null}
      previous={null}
      results={data.results}
    />
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await HeroesService.getHeroes('1')
  return { props: { data } }
}

export default IndexPage
