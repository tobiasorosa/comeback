import '../styles/globals.css'

import {PrismicPreview} from '@prismicio/next'
import {PrismicProvider} from '@prismicio/react'
import type {AppProps} from 'next/app'
import Link from 'next/link'

import {linkResolver, repositoryName} from '/prismicio'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({href, ...props}) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
