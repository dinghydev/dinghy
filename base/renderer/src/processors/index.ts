import { p10HandleTextNodes } from './p10HandleTextNodes.tsx'
import { p20PopulateCoreAttributes } from './p20PopulateCoreAttributes.tsx'
import { p30ResolveDependencies } from './p30ResolveDependencies.tsx'
import type { HostContainer } from '../types.ts'
import { p40CollectViewsAndStages } from './p40CollectViewsAndStages.tsx'

export type Processor = (container: HostContainer<unknown, unknown>) => void

const processors: Processor[] = [
  p10HandleTextNodes,
  p20PopulateCoreAttributes,
  p30ResolveDependencies,
  p40CollectViewsAndStages,
]

export function applyProcessors(container: HostContainer<unknown, unknown>) {
  processors.map((processor) => processor(container))
}
