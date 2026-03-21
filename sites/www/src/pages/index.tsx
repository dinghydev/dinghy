import type { ReactNode } from 'react'
import { useEffect } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Home from '../components/Home'

export default function Index(): ReactNode {
  useEffect(() => {
    document.body.classList.add('homepage')
    return () => document.body.classList.remove('homepage')
  }, [])

  return (
    <Layout
      title='Welcome'
      description='Diagram and Infrastructure as Code with React'
    >
      <Head>
        <body className='homepage' />
      </Head>
      <Home />
    </Layout>
  )
}
