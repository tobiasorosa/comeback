export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_ACCESS_TOKEN: string
      CONTENTFUL_SPACE_ID: string
    }
  }
}
