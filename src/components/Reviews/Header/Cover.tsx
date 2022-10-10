import React from 'react'

import {ReviewEntry} from '/src/types/Entries'

export const Cover = ({data}: {data: ReviewEntry}) => {
  const bgImgUrl = data.fields.cover.fields.file.url

  return (
    <div
      style={{
        backgroundImage: `url(${bgImgUrl})`,
      }}
      className="relative h-96 bg-no-repeat bg-center bg-cover text-center before:bg-gradient-to-r before:from-transparent before:to-[#0A0B0C] before:h-full before:w-16 before:block before:top-0 before:right-[-1px] before:absolute after:bg-gradient-to-l after:from-transparent after:to-[#0A0B0C] after:h-full after:w-16 after:block after:top-0 after:left-[-1px] after:absolute"
    >
      <div className="bg-[rgba(0,0,0,0.52)] h-full w-full flex justify-center align-text-bottom">
        <div className="mb-4 self-end">
          <h1 className="text-2xl mb-2 font-bold">{data.fields?.title}</h1>

          <span>A honest Review by a real Gamer</span>
        </div>
      </div>
    </div>
  )
}
