import {Metadata, Sys} from 'contentful'

export type ReviewFields = {
  content: ContentType
  rating: number
  slug: string
  title: string
  cover: CoverType
}

export type ContentType = {
  content: ContentOverNode[]
  data: any
  nodeType: string
}

export type ContentOverNode = {
  content: ContentValueNode[]
  data: any
  nodeType: string
}

export type ContentValueNode = {
  data: any
  marks: any[]
  nodeType: string
  value: string
}

export type CoverType = {
  fields: CoverFields
  metadata: Metadata
  sys: Sys
}

export type CoverFields = {
  description: string
  file: CoverFile
  title: string
}

export type CoverFile = {
  contentType: string
  details: CoverFileDetails
  fileName: string
  url: string
}

export type CoverFileDetails = {
  image: {width: number; height: number}
  size: number
}
