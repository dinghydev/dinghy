import React from 'react'
import Hero from './Hero/index.tsx'
import DiagramAsCode from './DiagramAsCode/index.tsx'
import InfrastructureAsCode from './InfrastructureAsCode/index.tsx'
import StarAsCode from './StarAsCode/index.tsx'
import ShowCases from './ShowCases/index.tsx'
export default function Home() {
  return (
    <main>
      <Hero />
      <DiagramAsCode />
      <InfrastructureAsCode />
      <StarAsCode />
      <ShowCases />
    </main>
  )
}
