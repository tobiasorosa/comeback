import {asLink} from '@prismicio/helpers'
import {SliceZone} from '@prismicio/react'
import {PrismicDocument} from '@prismicio/types'
import {GetStaticProps, NextPage, PreviewData} from 'next'

import {createClient, linkResolver} from '/prismicio'
import {components} from '/slices'

export const getStaticProps: GetStaticProps = async ({params, previewData}) => {
  const client = createClient({previewData})
  const uid = params?.uid ? params.uid[0] : ''

  const page = await client.getByUID('page', uid)

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => asLink(page, linkResolver)),
    fallback: false,
  }
}

interface PageProps {
  page: PrismicDocument
}

const Page: NextPage<PageProps> = ({page}) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page
