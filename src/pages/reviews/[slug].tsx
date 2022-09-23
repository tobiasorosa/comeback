import {GetStaticProps, NextPage} from 'next'
import Image from 'next/image'
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

  if (!entry) {
    return {
      notFound: true,
    }
  }

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

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  if (!entry) {
    return <p>Something is wrong</p>
  }

  return (
    <>
      <h1>{entry.fields.title}</h1>

      <Image
        src={'https:' + entry.fields.cover.fields.file.url}
        alt={entry.fields.cover.fields.description}
        height={entry.fields.cover.fields.file.details.image.height}
        width={entry.fields.cover.fields.file.details.image.width}
      />
    </>
  )
}

export default Page
