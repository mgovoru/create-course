import React from 'react'
import { Container } from '../components/Container/Container'
import { GetServerSideProps, NextPage } from 'next'
import { HeroesService } from '../services/heroes.service'
import { propsCommon } from '../base/types'

const IndexPage: NextPage<propsCommon> = ({ data, hero }) => {
  return <Container data={data} hero={ hero } />
}

// eslint-disable-next-line react-refresh/only-export-components
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = '1', details } = context.query

  if (details) {
      const data = await HeroesService.getHeroes(page as string)
      const hero = await HeroesService.getHero(details as string)
      return {
        props: {
          data,
          hero,
        },
      }
  } else {
    const data = await HeroesService.getHeroes(page as string)
    return {
      props: {
        data,
      },
    }
  }
}

export default IndexPage
