export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRISMIC_ACCESS_TOKEN: string
      PRISMIC_ENDPOINT: string
    }
  }
}
