import { p10HandleTextNodes } from './p10HandleTextNodes.tsx'
import { p20PopulateCoreAttributes } from './p20PopulateCoreAttributes.tsx'
import { p40ResolveDependencies } from './p40ResolveDependencies.tsx'
import type { HostContainer } from '../types.ts'
import { p50CollectViews } from './p50CollectViews.tsx'
import { p30BindData } from './p30BindData.tsx'
export type Processor = (container: HostContainer<unknown, unknown>) => void

const processors: Processor[] = [
  p10HandleTextNodes,
  p20PopulateCoreAttributes,
  p30BindData,
  p40ResolveDependencies,
  p50CollectViews,
]

export function applyProcessors(container: HostContainer<unknown, unknown>) {
  processors.map((processor) => processor(container))
}
