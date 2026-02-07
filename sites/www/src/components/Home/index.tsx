import React from 'react'
import Hero from './Hero/index.tsx'
import DiagramAsCode from './DiagramAsCode/index.tsx'
import InfrastructureAsCode from './InfrastructureAsCode/index.tsx'
import DocumentationAsCode from './DocumentationAsCode/index.tsx'
import ShowCases from './ShowCases/index.tsx'
export default function Home() {
  return (
    <main>
      <Hero />
      <DiagramAsCode />
      <InfrastructureAsCode />
      <DocumentationAsCode />
      <ShowCases />
    </main>
  )
}
