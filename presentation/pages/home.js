import Layout from './../components/layout/layout'
import Head from 'next/head'
import HeroSection from '../components/home/hero-section'
import Campaigns from '../components/home/campaigns'
import Favorites from '../components/home/favorites'
import Products from '../components/home/products'
import Cards from '../components/home/cards'

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Bil Hayal</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSection />
      <Campaigns />
      <Favorites />
      <Products />
      <Cards />
    </Layout>
  )
}

export default HomePage
