import {Metadata, Sys} from 'contentful'

import {ReviewFields} from './ReviewFields'

export type ReviewEntry = {
  fields: ReviewFields
  metadata: Metadata
  sys: Sys
}
