import Head from 'next/head'
import React from 'react'

export default function HeadMain({title, desc}) {
  return (
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <meta name='description' content={desc} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={desc}/>
        <meta property='og:url' content='https://create-quiz-peach.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={`https://create-quiz-peach.vercel.app/api/og?title=${title}`} />
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:url' content='https://create-quiz-peach.vercel.app/'/>
        <meta name='twitter:title' content={title}/>
        <meta property='twitter:description' content={desc}/>
        <meta property='twitter:image' content={`https://create-quiz-peach.vercel.app/api/og?title=${title}`} />
      </Head>
  )
}