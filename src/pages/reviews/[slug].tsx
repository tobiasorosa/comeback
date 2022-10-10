import {GetStaticProps, NextPage} from 'next'
import {useRouter} from 'next/router'
import {ParsedUrlQuery} from 'querystring'

import {Footer} from '/src/components/Footer'
import {Header} from '/src/components/Header'
import {Cover} from '/src/components/Reviews/Header/Cover'
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
      <Header />

      <div className="container px-4">
        <Cover data={entry} />
      </div>

      <Footer />
    </>
  )
}

export default Page
