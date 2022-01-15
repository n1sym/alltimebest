import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Heading, Flex } from '@chakra-ui/react'
import {Nav} from "../components/Nav"
import { Layout } from "../components/Layout"

const siteTitle = "みんなのオールタイムベスト"

const Home: NextPage = () => {
  return (
    <Layout page="top">
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          property="og:image"
          content={`https://vercel-og-image.hukurouo.com/%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AE**%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%99%E3%82%B9%E3%83%88**.png?pattern=none&md=1&fontSize=70px&textColor=%23404040&textStrongColor=%238340BB`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex h={16} justify='center' align='center'>
        <Box>
          <Heading pt={8} size={"lg"} color={"blue.400"}>{"# " + siteTitle}</Heading>
        </Box>
        </Flex>
      </main>

    </Layout>
  )
}

export default Home
