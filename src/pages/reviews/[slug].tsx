import {GetStaticProps, NextPage} from 'next'
import {useRouter} from 'next/router'
import {ParsedUrlQuery} from 'querystring'

import {client} from '/src/services/contentful'
import {ReviewEntry} from '/src/types/Entries'

interface IParams extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as IParams

  const entry = (
    await client.getEntries({
      content_type: 'review',
      'fields.slug[in]': slug,
    })
  ).items[0]

  return {
    props: {
      entry,
    },
    revalidate: 60 * 60 * 12, // 12 horas
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

interface IPage {
  entry?: ReviewEntry
}

const Page: NextPage<IPage> = (props) => {
  const router = useRouter()
  const {entry} = props

  console.log(entry?.fields)

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return <h1>{entry?.fields.title}</h1>
}

export default Page
