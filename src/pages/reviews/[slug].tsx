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

  const entries = (
    await client.getEntries({
      content_type: 'review',
      'fields.slug[in]': slug,
    })
  ).items[0]

  return {
    props: {
      entries,
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
  entries?: ReviewEntry
}

const Page: NextPage<IPage> = (props) => {
  const router = useRouter()
  const {entries} = props

  console.log(entries?.fields)

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return <p>Teste</p>
}

export default Page
