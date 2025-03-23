import { p10HandleTextNodes } from './p10HandleTextNodes.js'
import { p20PopulateCoreAttributes } from './p20PopulateCoreAttributes.js'
import { p30ResolveDependencies } from './p30ResolveDependencies.js'
import type { HostContainer } from '../types.js'
import { p40CollectViewsAndStages } from './p40CollectViewsAndStages.js'

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
