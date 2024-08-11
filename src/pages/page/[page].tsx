import React from 'react'
import { Container } from '../../components/Container/Container'
import { GetServerSideProps, NextPage } from 'next'
import { propsCommon } from '../../base/types'
import { HeroesService } from '../../services/heroes.service'


const Page: NextPage<propsCommon> = ({ data, hero }) => {
  return <Container data={data} hero={ hero } />
}

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page , details, search } = context.query
  const str = search as string || ''
  if (details) {
    const data = await HeroesService.getHeroes(page as string, str)
    const hero = await HeroesService.getHero(details as string)
    return {
      props: {
        data,
        hero,
      },
    }
  } else {
    const data = await HeroesService.getHeroes(page as string, str)
    return {
      props: {
        data,
      },
    }
  }
}
export default Page
